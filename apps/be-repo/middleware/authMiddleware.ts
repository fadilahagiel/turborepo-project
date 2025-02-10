import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ message: "Unauthorized" });
  next();
};
