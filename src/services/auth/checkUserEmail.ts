import { User } from "../../models";

import { UserI } from "../../interfaces/user";

export const checkUserEmail = async (
  email: string
): Promise<UserI | undefined | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
  }
};
