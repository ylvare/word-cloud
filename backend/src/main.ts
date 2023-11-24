import { createServer } from "node:http";
import { IncomingMessage, ServerResponse } from "node:http";
import { readFile, writeFile } from "node:fs/promises"; // Import the writeFile function
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import { join } from "node:path";

createServer(router).listen(8126, () => {
  console.log("Listening on http://localhost:8126");
});

async function router(req: IncomingMessage, res: ServerResponse) {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers["host"]}`);

    switch (`${req.method} ${url.pathname}`) {
      case "GET /api/challenge":
        res.writeHead(200);
        res.write(
          await marked(
            await readFile(
              fileURLToPath(new URL("../../CHALLENGE.md", import.meta.url)),
              "utf8"
            ),
            { async: true }
          )
        );
        break;

      case "GET /api/textfile":
        const filename = url.searchParams.get("filename");
        if (!filename) {
          res.writeHead(400);
          res.write("Missing 'filename' parameter");
        } else {
          try {
            const filePath = join(process.cwd(), "src/textfiles", filename);
            const fileContent = await readFile(filePath, "utf8");
            res.writeHead(200);
            res.write(fileContent);
          } catch (error) {
            res.writeHead(404);
            res.write("File not found");
          }
        }
        break;

      case "POST /api/upload":
        const fileData = await getRequestBody(req);
        const fileName = fileData.filename;
        const fileContent = fileData.content;

        if (!fileName || !fileContent) {
          res.writeHead(400);
          res.write("Missing file data");
        } else {
          try {
            const filePath = join(process.cwd(), "textfiles", fileName);
            await writeFile(filePath, fileContent);
            res.writeHead(200);
            res.write("File uploaded successfully");
          } catch (error) {
            res.writeHead(500);
            res.write("Failed to upload file");
          }
        }
        break;

      default:
        res.writeHead(404);
        res.write("Not Found");
        break;
    }
  } catch (e) {
    console.error(e);
    res.writeHead(500);
    res.write("Something went wrong! Check the console...");
  } finally {
    res.end();
  }
}

async function getRequestBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  });
}