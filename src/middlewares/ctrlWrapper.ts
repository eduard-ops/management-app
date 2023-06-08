import { RequestHandler } from "express";

export const ctrlWrapper = <T extends RequestHandler>(
  ctrl: T
): RequestHandler => {
  const func: RequestHandler = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
