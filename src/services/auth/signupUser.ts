import { User } from "../../models";

import { UserI } from "../../interfaces";

export const signupUser = async (
  email: string,
  password: string,
  verificationToken: string
): Promise<UserI | undefined> => {
  try {
    const user = await User.create({ email, password, verificationToken });
    return user;
  } catch (error) {
    console.log(error);
  }
};
