import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req: Request, res: Response): void => {
  const { login, password } = req.body;

  if (login !== process.env.ADMIN_LOGIN || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Неверный логин или пароль" });
    return;
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
    expiresIn: "24h",
  });

  res.json({ token });
});

export default router;
