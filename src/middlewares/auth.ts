import { NextFunction, Request } from "express";
import { createError } from "../helpers";
import { UserI } from "../interfaces";

import { checkUserById } from "../services/auth";

import jwt from "jsonwebtoken";

import config from "../config";

const {
  jwt: { accessSecret },
} = config;

interface AuthRequest extends Request {
  user?: UserI;
}

export const auth = async (req: AuthRequest, _, next: NextFunction) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer") {
      throw createError(401);
    }
    const { id } = jwt.verify(token, accessSecret!) as { id: string };
    const user = await checkUserById(id);
    if (!user || !user.accessToken) {
      throw createError(401);
    }
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof Error) {
      if (
        error.message === "invalid signature" ||
        error.message === "jwt expired"
      ) {
        error["status"] = 401;
      }
    }

    next(error);
  }
};
