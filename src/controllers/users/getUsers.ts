// import { Types } from "mongoose";
import { Roles } from "../../enums";
import { UserI } from "../../interfaces";
import { getAllUsers, getUserById } from "../../services/users";

import { addSubordinates } from "../../helpers";

export const getUsers = async (req, res) => {
  const { _id, bossId, role } = req.user;
  if (role === Roles.ADMIN) {
    const data = await getAllUsers();
    res.json({ data: { data } });
  } else if (role === Roles.USER) {
    const data = await getUserById(_id);
    res.json({ data: { data } });
  } else if (role === Roles.BOSS) {
    const data = await getAllUsers();
    const parse = addSubordinates(data, bossId);
    const result = parse.filter(
      (item) => item._id.toString() === _id.toString()
    );
    res.json({ data: { result } });
  }
};
