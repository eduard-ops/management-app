import { User } from "../../models";

export const signupUser = async (
  email: string,
  password: string,
  verifyCode: number,
  varifyTime: number
) => {
  try {
    const user = await User.create({ email, password, verifyCode, varifyTime });
    return user;
  } catch (error) {
    console.log(error);
  }
};
