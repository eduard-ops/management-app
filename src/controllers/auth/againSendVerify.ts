import { checkUserEmail, updateVerify } from "../../services/auth";
import { createError, generateCode, sendVerifyMail } from "../../helpers";

import { Response, Request } from "express";

export const againSendVerify = async (
  req: Request<{}, {}, { email: string }>,
  res: Response<{ message: string }>
) => {
  const { email } = req.body;
  const data = await checkUserEmail(email);
  if (data?.verifyEmail) {
    throw createError(400, "Verification has already been passed");
  }
  const { verificationCode, verifyTime } = generateCode();
  await updateVerify(email, verificationCode, verifyTime);
  await sendVerifyMail(verificationCode, email);
  res.json({ message: "Verification email sent" });
};
