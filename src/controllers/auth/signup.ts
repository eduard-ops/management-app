import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { signupUser, checkUserEmail } from "../../services/auth";

import { createError } from "../../helpers";

import { signupType } from "../../types";

export const signup = async (
  req: Request<{}, {}, signupType>,
  res: Response
) => {
  const { email, password, role, bossId = null } = req.body;

  const user = await checkUserEmail(email);

  if (user) {
    throw createError(409, `Email address is already registered`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await signupUser({
    email,
    password: hashPassword,
    role,
    bossId,
  });
  res.status(201).json({
    message: "Created",
    status: 201,
    data: {
      user: {
        email: result?.email,
        role: result?.role,
      },
    },
  });
};
