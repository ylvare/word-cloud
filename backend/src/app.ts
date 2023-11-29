import express from "express";
import cors from "cors";
import textFileRoute from './routes/textFileRoutes.js';
import rssRoutes from './routes/rssRoutes.js';
import cloudDataRoute from './routes/cloudDataRoute.js';
import { isPromise } from "util/types";

//https://github.com/TypeStrong/ts-node/discussions/1781

const app = express();
//app.use(cors());

// Enable CORS for a specific origin
app.use(cors({
  origin: 'https://ylvare.github.io/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://ylvare.github.io/');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json()); 
app.use('/', cloudDataRoute)
app.use('/', textFileRoute)
app.use('/', rssRoutes)

export default app;