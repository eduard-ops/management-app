import { User } from "../../models";

export const findUsersIdBoss = async (bossId) => {
  try {
    const data = await User.find({ bossId: bossId });
    return data;
  } catch (error) {
    console.log(error);
  }
};
