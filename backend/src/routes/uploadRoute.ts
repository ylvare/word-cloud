import { Router, Request, Response } from "express";
import { writeFile } from "fs/promises";
import { join } from "path";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { filename, content } = req.body;
    if (!filename || !content) {
      res.status(400).send("Missing file data");
      return;
    }

    const filePath = join(process.cwd(), "textfiles", filename);
    await writeFile(filePath, content);
    res.status(200).send("File uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to upload file");
  }
});

export default router;