import express from "express";
//import textFileRoute from './routes/textFileRoute';
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
//app.use('/textfile', textFileRoute)
export default app;
