import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { signupUser, checkUserEmail } from "../../services/auth";

import { createError, sendVerifyMail, generateCode } from "../../helpers";

interface signupUser {
  email: string;
  password: string;
}

export const signup = async (
  req: Request<{}, {}, signupUser>,
  res: Response
) => {
  const { email, password } = req.body;

  const user = await checkUserEmail(email);

  if (user?.verifyEmail === false) {
    throw createError(403, "Please verify your email");
  }

  if (user) {
    throw createError(409, `Email address is already registered`);
  }
  const { verificationCode, verifyTime } = generateCode();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await signupUser(
    email,
    hashPassword,
    verificationCode,
    verifyTime
  );
  await sendVerifyMail(verificationCode, email);
  console.log(verificationCode, email);
  res.status(201).json({
    message: "Created",
    status: 201,
    data: {
      user: {
        email: result?.email,
      },
    },
  });
};
