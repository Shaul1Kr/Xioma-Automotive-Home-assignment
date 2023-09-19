import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api.js";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";

import data from "./data/users.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", api);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //Insert users to db
    // data();
  })
  .catch((error) => console.log(`${error} did not connect`));
