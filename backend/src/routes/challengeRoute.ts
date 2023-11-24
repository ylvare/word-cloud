import { Router, Request, Response } from "express";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join } from "path";
import { marked } from "marked";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const challengeMarkdownPath = join(
      fileURLToPath(import.meta.url),
      "../../../../CHALLENGE.md"
    );
    const challengeMarkdown = await readFile(challengeMarkdownPath, "utf8");
    const html = marked(challengeMarkdown);
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;