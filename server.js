import http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    ws.send(msg.toString());
  });
});

server.listen(8080, () => {
  console.log("WebSocket server running on ws://localhost:8080");
});
