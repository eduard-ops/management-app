import { Types } from "mongoose";
import { UserI, subordinatesI } from "../interfaces/user";

const addSubordinates = (
  data: UserI[] | null = [],
  bossId: string | null
): subordinatesI[] => {
  return data!
    .filter((node) => node.bossId === bossId)
    .map(({ _id, email, role, bossId }) => {
      return {
        _id,
        email,
        role,
        bossId,
        subordinates: addSubordinates(data, _id.toString()),
      };
    });
};

export const parse = (
  data: UserI[] | null | undefined = [],
  bossId: string | null,
  _id: Types.ObjectId
): subordinatesI[] => {
  const res: subordinatesI[] = addSubordinates(data, bossId);
  return res.filter((item) => item._id.toString() === _id.toString());
};
