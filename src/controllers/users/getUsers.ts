import { Response } from "express";
import { Roles } from "../../enums";
import { AuthRequest, UserI } from "../../interfaces/user";
import { ResponseGetUsers } from "../../types/user";
import { getAllUsers, getUserById } from "../../services/users";
import { parse } from "../../helpers";

export const getUsers = async (
  req: AuthRequest,
  res: Response<{ message: string; data: ResponseGetUsers }>
) => {
  const { _id, bossId, role } = req.user as UserI;
  let responce: ResponseGetUsers = [];
  switch (role) {
    case Roles.USER:
      responce = await getUserById(_id);
      break;
    case Roles.ADMIN:
      responce = await getAllUsers();
      break;
    case Roles.BOSS:
      responce = parse(await getAllUsers(), bossId, _id);
      break;
  }

  res.status(200).json({ message: "success", data: responce });
};
