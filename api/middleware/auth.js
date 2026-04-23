import jwt from "jsonwebtoken";

const getSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  return secret;
};

export const signToken = (payload) => {
  return jwt.sign(payload, getSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Token lipsa" });
  }

  try {
    const decoded = jwt.verify(token, getSecret());
    req.user = { id: decoded.id, email: decoded.email, name: decoded.name };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid sau expirat" });
  }
};

export const requireSelf = (paramName = "userId") => (req, res, next) => {
  const paramId = Number(req.params[paramName] ?? req.body[paramName]);
  if (!req.user || req.user.id !== paramId) {
    return res.status(403).json({ message: "Acces interzis" });
  }
  next();
};
