import { Router } from "express";
import { User } from "../db.js";
import bcrypt from "bcryptjs";

export const userRouter = Router();

// REGISTER
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("Date lipsă");
    return;
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).send("Eroare la înregistrare");
  }
});

// LOGIN
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Date lipsă");
    return;
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).send("Email sau parolă greșită");
      return;
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(401).send("Email sau parolă greșită");
      return;
    }
   
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).send("Eroare la autentificare");
  }
});