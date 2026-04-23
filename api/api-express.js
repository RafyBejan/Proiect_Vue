import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { cartRouter } from "./routing/cart.router.js";
import { generalRouter } from "./routing/general.router.js";
import { userRouter } from "./routing/user.router.js";
import { cartItemRouter } from "./routing/cartitem.router.js";
import { orderRouter } from "./routing/order.router.js";

const api = express();
const port = Number(process.env.API_PORT) || 3000;

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

api.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

api.use(bodyParser.json({ limit: "100kb" }));

api.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Prea multe incercari. Reincearca in cateva minute." },
});

api.use(generalRouter);
api.use("/api/user", authLimiter, userRouter);
api.use("/api", cartRouter);
api.use("/api/cartitems", cartItemRouter);
api.use("/api/orders", orderRouter);

api.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);
  if (err && /CORS/.test(err.message)) {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: "Eroare interna" });
});

api.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
  console.log(`Allowed CORS origins: ${allowedOrigins.join(", ")}`);
});
