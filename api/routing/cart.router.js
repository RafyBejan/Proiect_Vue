import { Router } from "express";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../service/cart.service.js";

export const cartRouter = Router();



cartRouter.get("/view", async (req, res) => {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;

  let sort = [];
  if (req.query.sort === "price-asc") sort = ["price", "ASC"];
  if (req.query.sort === "price-desc") sort = ["price", "DESC"];

  try {
    const products = await getProducts(filter, sort);
    res.json(products);
  } catch (err) {
    res.status(500).send("Eroare la obținerea produselor");
  }
});


cartRouter.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price) {
    res.status(400).send("Produs invalid");
    return;
  }
  try {
    const product = await addProduct({ name, price, category });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send("Eroare la adăugarea produsului");
  }
});


cartRouter.delete("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const deleted = await deleteProduct(id);
    if (!deleted) {
      res.status(404).send("Produsul nu a fost gasit");
      return;
    }
    res.send("Produs sters");
  } catch (err) {
    res.status(500).send("Eroare la ștergerea produsului");
  }
});


cartRouter.put("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, price, category } = req.body;
  try {
    const [updated] = await updateProduct(id, { name, price, category });
    if (!updated) {
      res.status(404).send("Produsul nu a fost gasit");
      return;
    }
    res.send("Produs actualizat");
  } catch (err) {
    res.status(500).send("Eroare la actualizarea produsului");
  }
});