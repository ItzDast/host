const socket = io();
const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");

function sendMessage() {
  const text = input.value.trim();
  if (text) {
    socket.emit("chat message", text);
    input.value = "";
  }
}

socket.on("chat message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
