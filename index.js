import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";
import { router } from "./routers/index.js";
configDotenv(".env")

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router)

      

async function startApp() {
  try {
   await mongoose.connect(process.env.URL);
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

//npm run dev
startApp().catch(console.dir);
