import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://chat-app-lyart-one.vercel.app",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

export const getRecieverSockedID = (recieverID, newMessage) => {
  const rId = userSocketMap[recieverID];
  console.log(rId);
  io.to(rId).timeout(5000).emit("getMessages", newMessage, (error) => {
    if (error) {
      console.error("Error emitting getMessages event:", error);
    } else {
      console.log("getMessages event emitted successfully!");
    }
  });
};

io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);

  const userID = socket.handshake.query.userID;
  if (userID !== undefined) userSocketMap[userID] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user is disconnected", socket.id);
    delete userSocketMap[userID];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
