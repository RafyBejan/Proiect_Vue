import { Router } from "express";
import { CartItem, Product } from "../db.js";
import { requireAuth } from "../middleware/auth.js";
import { validate, validators } from "../middleware/validate.js";

export const cartItemRouter = Router();

cartItemRouter.use(requireAuth);

cartItemRouter.post(
  "/",
  validate({
    productId: validators.positiveInt,
    quantity: validators.positiveInt,
  }),
  async (req, res) => {
    const { productId, quantity } = req.body;
    try {
      const cartItem = await CartItem.create({
        ProductId: Number(productId),
        quantity: Number(quantity),
        UserId: req.user.id,
      });
      res.status(201).json(cartItem);
    } catch (err) {
      console.error("Add cart item error:", err);
      res.status(500).json({ message: "Eroare la adaugarea in cos" });
    }
  }
);

cartItemRouter.get("/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  if (userId !== req.user.id) {
    return res.status(403).json({ message: "Acces interzis" });
  }
  try {
    const items = await CartItem.findAll({
      where: { UserId: userId },
      include: [Product],
    });
    res.json(items);
  } catch (err) {
    console.error("Fetch cart error:", err);
    res.status(500).json({ message: "Eroare la obtinerea cosului" });
  }
});

cartItemRouter.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "ID invalid" });
  }
  try {
    const deleted = await CartItem.destroy({
      where: { id, UserId: req.user.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Produsul nu a fost gasit" });
    }
    res.json({ message: "Produsul sters din cos" });
  } catch (err) {
    console.error("Delete cart item error:", err);
    res.status(500).json({ message: "Eroare la stergere" });
  }
});
