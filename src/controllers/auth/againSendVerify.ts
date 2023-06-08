// import { checkUserEmail, updateVerify } from "../../services/auth";
// import { createError, generateCode, sendVerifyMail } from "../../helpers";

import { Response, Request } from "express";

export const againSendVerify = async (
  req: Request<{}, {}, { email: string }>,
  res: Response<{ message: string }>
) => {
  res.json({ message: "Verification email sent" });
};
