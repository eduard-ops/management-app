import { User } from "../../models";

import { UserI } from "../../interfaces/user";

import { signupType } from "../../types/auth";

export const signupUser = async <T extends signupType>(
  obj: T
): Promise<UserI | undefined> => {
  try {
    const user = await User.create(obj);
    return user;
  } catch (error) {
    console.log(error);
  }
};
