const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  // console.log('User connected');

  // socket.on('disconnect', () => {
  //     console.log('User disconnected');
  // })

  // socket.on('chat', (msg) => {
  //     console.log('Message: '+msg);
  // })

  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});

app.get("/", (req, res) => {
  // res.send('<h1>Chat App</h1>')
  // console.log(__dirname);
  res.sendFile(`${__dirname}/client/index.html`);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
