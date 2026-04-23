import { Router } from "express";
import { User } from "../db.js";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/auth.js";
import { validate, validators } from "../middleware/validate.js";

export const userRouter = Router();

const publicUser = (user) => ({ id: user.id, name: user.name, email: user.email });

userRouter.post(
  "/register",
  validate({
    name: validators.name,
    email: validators.email,
    password: validators.password,
  }),
  async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const existing = await User.findOne({ where: { email } });
      if (existing) {
        return res.status(409).json({ message: "Email deja folosit" });
      }
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hash });
      const token = signToken({ id: user.id, email: user.email, name: user.name });
      res.status(201).json({ user: publicUser(user), token });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ message: "Eroare la inregistrare" });
    }
  }
);

userRouter.post(
  "/login",
  validate({
    email: validators.email,
    password: (v) => typeof v === "string" && v.length > 0,
  }),
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Email sau parola gresita" });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({ message: "Email sau parola gresita" });
      }
      const token = signToken({ id: user.id, email: user.email, name: user.name });
      res.json({ user: publicUser(user), token });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Eroare la autentificare" });
    }
  }
);
