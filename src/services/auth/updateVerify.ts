import { User } from "../../models";

export const updateVerify = async (
  email: string,
  verifyCode: number,
  verifyTime: number
) => {
  try {
    await User.findOneAndUpdate(
      { email },
      {
        verifyCode,
        verifyTime,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
