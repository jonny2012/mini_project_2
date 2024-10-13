import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv(".env")

export function checkAuth(req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unautorized" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      res.json({ message: "Session expired" });
      return;
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json(err.message);
  }
}
