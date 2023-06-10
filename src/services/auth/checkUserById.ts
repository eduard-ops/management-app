import { UserI } from "../../interfaces/user";
import { User } from "../../models";

export const checkUserById = async (
  id: string
): Promise<UserI | undefined | null> => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};
