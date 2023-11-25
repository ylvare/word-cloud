import express from "express";
import textFileRoute from './routes/textFileRoutes.js';
import challengeRoute from './routes/challengeRoute.js';
import postRoutes from './routes/postRoutes.js';

//https://github.com/TypeStrong/ts-node/discussions/1781

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/textfile/', textFileRoute)
app.use('/api/challenge/', challengeRoute)
app.use('/', postRoutes)

export default app;