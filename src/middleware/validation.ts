import { Request, Response, NextFunction } from "express";
import gameSchema from "../schema/games.schema";

export const handlenInputErrors = (req: Request, res: Response, next: NextFunction) => {
  try {
    gameSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ errors: err });
  }
}