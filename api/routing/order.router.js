import { Router } from "express";
import { placeOrder } from "../service/cart.service.js";

export const orderRouter = Router();

orderRouter.post("/", async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).send("Lipsă userId");

  try {
    const result = await placeOrder(userId);
    res.status(201).json({ message: "Comandă plasată!", orderId: result.orderId });
  } catch (err) {
    res.status(500).send("Eroare la plasarea comenzii: " + err.message);
  }
});