import { Request, Response } from "express";
import { checkUserEmail, verificationMail } from "../../services/auth";
import { createError } from "../../helpers";
import moment from "moment";

interface verifyEmailUser {
  verifyCode: number;
  email: string;
}

export const verifyEmail = async (
  req: Request<{}, {}, verifyEmailUser>,
  res: Response
) => {
  const { verifyCode, email } = req.body;

  const user = await checkUserEmail(email);

  if (user?.verifyCode !== verifyCode) {
    throw createError(401, "Invalid code");
  }

  const currentTime = moment().unix();

  if (user?.varifyTime! <= currentTime) {
    throw createError(401, "Code has been expired");
  }
  await verificationMail(email);
  res.json({
    message: "Verification successful",
  });
};
