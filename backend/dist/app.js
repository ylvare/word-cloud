import express from "express";
import textFileRoute from './routes/textFileRoutes.js';
import challengeRoute from './routes/challengeRoute.js';
import rssRoutes from './routes/rssRoutes.js';
//https://github.com/TypeStrong/ts-node/discussions/1781
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use('/api/textfile/', textFileRoute);
app.use('/api/challenge/', challengeRoute);
app.use('/api/', rssRoutes);
export default app;
