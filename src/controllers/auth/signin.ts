import bcrypt from "bcryptjs";

import { Response, Request } from "express";

import { checkUserEmail, setTokenUser } from "../../services/auth";

import { createError, generateTokens } from "../../helpers";

interface signinUser {
  email: string;
  password: string;
}

export const signin = async (
  req: Request<{}, {}, signinUser>,
  res: Response
) => {
  const { email, password } = req.body;

  const user = await checkUserEmail(email);

  const passCompare = bcrypt.compareSync(password, user?.password ?? "");

  if (!user || !passCompare) {
    throw createError(401, `Email address or password doesn't correct`);
  }

  if (user.verifyEmail === false) {
    throw createError(403, "Please verify your email");
  }

  const _id = user._id.toString();
  const { accessToken, refreshToken } = generateTokens(_id);
  await setTokenUser(_id, accessToken, refreshToken);
  res.json({
    status: "success",
    code: 200,
    data: { accessToken, refreshToken },
  });
};
