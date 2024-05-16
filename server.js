import express from "express";

const app = express();

import students from "./models/students";
import dbConnection from "./config/db-connect";
dbConnection
  .sync({ force: true })
  .then(result => {
    console.log(result);
    app.listen(process.env.PORT, () => {
      console.log("Server started on port", process.env.PORT);
    });
  })
  .catch(err => console.log(err));
