import express from "express";
import mongoose from "mongoose";

/* App Config */
const app = express();
const port = process.env.PORT || 9000;
const Db_URL =
  "mongodb+srv://admin:Sj5y1Buixe6uz8eH@tinder-mern-database.auohm.mongodb.net/tinder-db?retryWrites=true&w=majority";
/* Middlewares */

/* Db Config */
mongoose.connect(Db_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
/* API Endpoints */
app.get("/", (req, res) => {
  res.status(200).send("Hello! This API Is Working!");
});

/* Listener */
app.listen(port, () => console.log(`listening on localhost:${port}`));
