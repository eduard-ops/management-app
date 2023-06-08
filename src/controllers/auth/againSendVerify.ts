// import { checkUserEmail, updateVerify } from "../../services/auth";
import { createError, mailMessage, sendVerifyMail } from "../../helpers";

import { checkUserEmail } from "../../services/auth";

import { Response, Request } from "express";

export const againSendVerify = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await checkUserEmail(email);

  if (!user) {
    throw createError(404, "User not found");
  }

  const { verifyEmail, verificationToken } = user;

  if (verifyEmail) {
    throw createError(400, "Verification has already been passed");
  }
  await sendVerifyMail(verificationToken, email);
  res.json({ message: "Verification email sent" });
};
