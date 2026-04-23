import { Router } from "express";
import { placeOrder } from "../service/cart.service.js";
import { requireAuth } from "../middleware/auth.js";

export const orderRouter = Router();

orderRouter.post("/", requireAuth, async (req, res) => {
  try {
    const result = await placeOrder(req.user.id);
    res.status(201).json({ message: "Comanda plasata!", orderId: result.orderId });
  } catch (err) {
    console.error("Place order error:", err);
    res.status(500).json({ message: "Eroare la plasarea comenzii" });
  }
});
