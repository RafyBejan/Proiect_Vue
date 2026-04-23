import { WebSocketServer } from "ws";

const port = Number(process.env.WS_PORT) || 3001;
const wss = new WebSocketServer({ port });

const clients = new Set();

wss.on("connection", (ws) => {
  console.log("Client connected");
  clients.add(ws);

  ws.on("message", (data) => {
    const payload = data.toString();
    console.log("received: %s", payload);

    for (const client of clients) {
      if (client.readyState === 1) {
        client.send(payload);
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err.message);
    clients.delete(ws);
  });
});

console.log(`WebSocket server running on port ${port}`);
