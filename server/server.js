import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoute.js";
import messageRoutes from "./routes/messageRoutes.js";

import dbConnect from "./database/dbConnect.js";

import { app,server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: "https://chat-app-lyart-rho.vercel.app",exposedHeaders: ["Set-Cookie"]}));
// app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  dbConnect();
  console.log(`server started at ${PORT}`);
});
