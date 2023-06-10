import { UserI } from "../../interfaces/user";
import { User } from "../../models";

export const findBossId = async (
  bossId: string
): Promise<UserI | undefined | null> => {
  try {
    const data = await User.findOne({ role: "boss", _id: bossId });
    return data;
  } catch (error) {
    console.log(error);
  }
};
