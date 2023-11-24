import { Router } from "express";
import { readFile } from "fs/promises";
import { join } from "path";
const router = Router();
router.get("/", async (req, res) => {
    try {
        const filename = req.query.filename;
        if (!filename) {
            res.status(400).send("Missing 'filename' parameter");
            return;
        }
        const filePath = join(process.cwd(), "src/textfiles", filename);
        const fileContent = await readFile(filePath, "utf8");
        res.status(200).send(fileContent);
    }
    catch (error) {
        console.error(error);
        res.status(404).send("File not found");
    }
});
export default router;
