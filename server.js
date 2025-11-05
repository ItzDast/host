const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public")); // папка с сайтом

io.on("connection", (socket) => {
  console.log("Пользователь подключился");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // отправка всем
  });

  socket.on("disconnect", () => {
    console.log("Пользователь вышел");
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
