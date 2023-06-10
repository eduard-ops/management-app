import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { signupUser, checkUserEmail } from "../../services/auth";

import { createError, checkBossId } from "../../helpers";

import { signupType, ResponseSignup } from "../../types/auth";

export const signup = async (
  req: Request<{}, {}, signupType>,
  res: Response<ResponseSignup>
) => {
  const { email, password, role, bossId = null } = req.body;

  const user = await checkUserEmail(email);

  if (user) {
    throw createError(409, `Email address is already registered`);
  }

  if (bossId) {
    await checkBossId(bossId);
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
    data: {
      user: {
        email: result?.email,
        role: result?.role,
      },
    },
  });
};
