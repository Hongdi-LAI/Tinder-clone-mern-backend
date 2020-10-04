import express from "express";
import mongoose from "mongoose";

/* App Config */
const app = express();
const port = process.env.PORT || 9000;

/* Middlewares */

/* Db Config */

/* API Endpoints */
app.get("/", (req, res) => {
  res.status(200).send("Hello! This API Is Working!");
});

/* Listener */
app.listen(port, () => console.log(`listening on localhost:${port}`));
