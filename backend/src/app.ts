import express from "express";
import textFileRoute from './routes/textFileRoute.js';
import challengeRoute from './routes/challengeRoute.js';
import uploadRoute from './routes/uploadRoute.js';

//https://github.com/TypeStrong/ts-node/discussions/1781

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/textfile', textFileRoute)
app.use('/api/challenge', challengeRoute)
app.use('/api/upload', uploadRoute)

export default app;