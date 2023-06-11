import { Response } from "express";
import { AuthRequest, UserI } from "../../interfaces/user";
import { signoutUser } from "../../services/auth/signoutUser";

export const signout = async (req: AuthRequest, res: Response) => {
  const { _id } = req.user as UserI;
  await signoutUser(_id);
  res.status(204).json();
};
