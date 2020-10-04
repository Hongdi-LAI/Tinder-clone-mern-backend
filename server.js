import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

/* App Config */
const app = express();
const port = process.env.PORT || 8001;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Db Config */

const Db_URL =
  "mongodb+srv://admin:mfP7rk8N0P1uBZ4G@cluster0.auohm.mongodb.net/tinderdb?retryWrites=true&w=majority";

const connection = mongoose.createConnection(Db_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("Db connected");
});

mongoose.connect(Db_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

/* API Endpoints */
app.get("/", (req, res) => res.status(200).send("Hello! This API Is Working!"));

app.post("/tinder/postcards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/getcards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
/* Listener */
app.listen(port, () => console.log(`listening on localhost:${port}`));
