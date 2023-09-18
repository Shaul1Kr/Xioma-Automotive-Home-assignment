import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
