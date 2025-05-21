import { Router } from "express";
import {
  getProducts,
  addToCart,
  removeFromCart,
  clearCart,
  getCart,
} from "../service/cart.service.js";

export const cartRouter = Router();

cartRouter.get("/view", (req, res) => {
  res.json(getProducts());
});

cartRouter.post("/products", (req, res) => {
  const { id, name, price } = req.body;
  if (!id || !name || !price) {   
    res.status(400).send("Produs invalid");
    return;
  }
  const newProduct = { id, name, price };
  const products = getProducts(); 
  products.push(newProduct);
  res.status(201).json(newProduct);
});


cartRouter.delete("/cart/remove", (req, res) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).send("ID-ul produsului este necesar");
    return;
  }
  removeFromCart(id);
  res.send("Produs șters din coș și din lista de produse");
});


cartRouter.post("/cart/clear", (req, res) => {
  clearCart();
  res.send("Coșul a fost golit");
});

