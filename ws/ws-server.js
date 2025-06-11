import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3001 }); // <-- corect

const clients = []

wss.on("connection", (ws) => {
  console.log("Client connected");

  clients.push(ws);

  ws.on("message", function message( ws, data) {
    console.log("received: %s" , data)

    clients.forEach(client => {
      client.send(data.toString());
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});