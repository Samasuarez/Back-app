import 'dotenv/config'
import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import { __dirname } from "./path.js";
import path from "path";
import cookieParser from "cookie-parser";
import mongoData from "./db/index.js";


const app = express();
const PORT = 2020;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views/"));

app.use(express.json());
app.use(cookieParser());


const server = app.listen(PORT, () => {
  console.log(`server on port:${PORT}`);
});

mongoData()
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("Connected to io server");
  socket.on("disconnect", () => {
    console.log("Disconnected from io server");
  });
});
