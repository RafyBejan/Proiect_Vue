import express from "express";
import bodyParser from "body-parser";
import { cartRouter } from "./routing/cart.router.js"; // Importă cartRouter
import { generalRouter } from "./routing/general.router.js"; // Păstrează dacă este necesar

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


api.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});