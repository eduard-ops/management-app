import { User } from "../../models";

export const verificationMail = async (email: string) => {
  try {
    await User.findOneAndUpdate(
      { email },
      {
        verifyEmail: true,
        verifyCode: null,
        varifyTime: null,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
