import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { signupUser, checkUserEmail } from "../../services/auth";

import { createError, checkMongoId } from "../../helpers";

import { signupType, ResponseSignup } from "../../types/auth";

import { findUsersIdBoss } from "../../services/users";

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
    checkMongoId(bossId, 400, "Invalid bossId");
    const check = await findUsersIdBoss(bossId);
    console.log(check);
    check ||
      (() => {
        throw createError(404, `Boss with id=${bossId} not found`);
      })();
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
