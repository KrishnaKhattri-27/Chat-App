import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./database/dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  dbConnect();
  console.log(`server started at ${PORT}`);
});
