import express from "express";
import textFileRoute from './routes/textFileRoutes.js';
import rssRoutes from './routes/rssRoutes.js';
import cloudDataRoute from './routes/cloudDataRoute.js';
//https://github.com/TypeStrong/ts-node/discussions/1781
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use(express.json());
app.use('/', cloudDataRoute);
app.use('/', textFileRoute);
app.use('/', rssRoutes);
export default app;
