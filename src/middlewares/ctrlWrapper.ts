import { NextFunction, Request, RequestHandler, Response } from "express";
import { AuthRequest } from "../interfaces/user";

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const ctrlWrapper = (ctrl: Controller): RequestHandler => {
  const func: RequestHandler = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
