import express from "express";
import indexRouter from "./routes/index.js";

import students from "./models/students.js";
import dbConnection from "./config/db-connect.js";
import globalErrHandler from "./lib/globalErrHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use(globalErrHandler);

dbConnection
  .sync()
  .then(result => {
    app.listen(process.env.PORT, () => {
      console.log("Server started on port", process.env.PORT);
    });
  })
  .catch(err => console.log(err));
