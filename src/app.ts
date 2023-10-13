import express from "express";

import bodyParser from "body-parser";

import newsPapersRoutes from "./routes/newspapers.route";

import publishersRoutes from './routes/publishers.route'

import fileUpload from "express-fileupload";

const app = express();

app.use(bodyParser.json());

app.use(
  fileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  })
);

app.use("/api/newspapers", newsPapersRoutes);

app.use("/api/publishers", publishersRoutes);

app.listen(4000);
