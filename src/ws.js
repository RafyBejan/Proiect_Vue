const wsUrl = import.meta.env.VITE_WS_URL || "ws://localhost:3001";

let socket = null;
let reconnectTimer = null;

function connect() {
  try {
    socket = new WebSocket(wsUrl);
  } catch (err) {
    console.error("WebSocket init failed:", err);
    scheduleReconnect();
    return;
  }

  socket.onopen = () => {
    console.log(`Connected to WebSocket: ${wsUrl}`);
  };

  socket.onmessage = (event) => {
    console.log(`Message from server: ${event.data}`);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
    scheduleReconnect();
  };

  socket.onerror = (err) => {
    console.error("WebSocket error:", err);
  };
}

function scheduleReconnect() {
  if (reconnectTimer) return;
  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    connect();
  }, 3000);
}

connect();

export const ws = {
  send(payload) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(typeof payload === "string" ? payload : JSON.stringify(payload));
    }
  },
  get raw() {
    return socket;
  },
};
