import bcrypt from "bcryptjs";

import { Response, Request } from "express";

import { checkUserEmail, setTokenUser } from "../../services/auth";

import { createError, generateToken } from "../../helpers";

import { signinType, ResponseSignin } from "../../types/auth";

export const signin = async (
  req: Request<{}, {}, signinType>,
  res: Response<ResponseSignin>
) => {
  const { email, password } = req.body;

  const user = await checkUserEmail(email);

  const passCompare = bcrypt.compareSync(password, user?.password ?? "");

  if (!user || !passCompare) {
    throw createError(401, `Email address or password doesn't correct`);
  }

  const _id = user._id.toString();
  const accessToken = generateToken(_id);
  await setTokenUser(_id, accessToken);
  res.status(200).json({
    message: "Success",
    data: { accessToken },
  });
};
