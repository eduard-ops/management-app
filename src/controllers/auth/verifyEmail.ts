import { Request, Response } from "express";
import { checkVerifyToken, verificationMail } from "../../services/auth";
import { createError } from "../../helpers";

export const verifyEmail = async (req: Request, res: Response) => {
  const { verificationToken } = req.params;

  const user = await checkVerifyToken(verificationToken);

  if (!user) {
    throw createError(404);
  }
  await verificationMail(user._id);
  res.json({
    message: "Verification successful",
  });
};
