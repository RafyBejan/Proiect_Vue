import { Router } from "express";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../service/cart.service.js";
import { requireAuth } from "../middleware/auth.js";
import { validate, validators } from "../middleware/validate.js";

export const cartRouter = Router();

const SORT_WHITELIST = {
  "price-asc": ["price", "ASC"],
  "price-desc": ["price", "DESC"],
  "name-asc": ["name", "ASC"],
  "name-desc": ["name", "DESC"],
};

cartRouter.get("/view", async (req, res) => {
  const filter = {};
  if (req.query.category && typeof req.query.category === "string") {
    filter.category = req.query.category;
  }

  const sort = SORT_WHITELIST[req.query.sort] || [];

  try {
    const products = await getProducts(filter, sort);
    res.json(products);
  } catch (err) {
    console.error("View products error:", err);
    res.status(500).json({ message: "Eroare la obtinerea produselor" });
  }
});

cartRouter.post(
  "/products",
  requireAuth,
  validate({
    name: validators.shortText(120),
    price: validators.positiveNumber,
    category: validators.optionalShortText(80),
  }),
  async (req, res) => {
    const { name, price, category } = req.body;
    try {
      const product = await addProduct({ name, price, category });
      res.status(201).json(product);
    } catch (err) {
      console.error("Add product error:", err);
      res.status(500).json({ message: "Eroare la adaugarea produsului" });
    }
  }
);

cartRouter.delete("/products/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "ID invalid" });
  }
  try {
    const deleted = await deleteProduct(id);
    if (!deleted) {
      return res.status(404).json({ message: "Produsul nu a fost gasit" });
    }
    res.json({ message: "Produs sters" });
  } catch (err) {
    console.error("Delete product error:", err);
    res.status(500).json({ message: "Eroare la stergerea produsului" });
  }
});

cartRouter.put(
  "/products/:id",
  requireAuth,
  validate({
    name: validators.shortText(120),
    price: validators.positiveNumber,
    category: validators.optionalShortText(80),
  }),
  async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ message: "ID invalid" });
    }
    const { name, price, category } = req.body;
    try {
      const [updated] = await updateProduct(id, { name, price, category });
      if (!updated) {
        return res.status(404).json({ message: "Produsul nu a fost gasit" });
      }
      res.json({ message: "Produs actualizat" });
    } catch (err) {
      console.error("Update product error:", err);
      res.status(500).json({ message: "Eroare la actualizarea produsului" });
    }
  }
);
