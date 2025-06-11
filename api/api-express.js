import express from "express";
import bodyParser from "body-parser";
import { cartRouter } from "./routing/cart.router.js"; 
import { generalRouter } from "./routing/general.router.js"; 
import { userRouter } from "./routing/user.router.js";
import { cartItemRouter } from "./routing/cartitem.router.js";
import { orderRouter } from "./routing/order.router.js";

const api = express();
const port = 3000;


api.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


api.use(bodyParser.json());


api.use(generalRouter); 
api.use("/api", cartRouter); 
api.use("/api/user", userRouter);
api.use("/api/cartitems", cartItemRouter);
api.use("/api/orders", orderRouter);


api.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});