import { User } from "../../models";

import { Document } from "mongoose";

interface UserDocument extends Document {
  email: string;
}

type signupType = (
  email: string,
  password: string,
  verifyToken: string
) => Promise<any> | undefined;

export const signupUser: signupType = async (
  email,
  password,
  verificationToken
) => {
  try {
    const user = await User.create({ email, password, verificationToken });
    return user;
  } catch (error) {
    console.log(error);
  }
};
