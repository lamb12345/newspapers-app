import express from "express";

import bodyParser from "body-parser";

import newsPapersRoutes from "./routes/newspapers.route";

const app = express();

app.use(bodyParser.json());

app.use("/newspapers", newsPapersRoutes);

app.listen(4000);
