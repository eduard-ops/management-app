import { User } from "../../models";

export const checkVerifyToken = async (verificationToken) => {
  try {
    const data = await User.findOne({ verificationToken });
    return data;
  } catch (error) {
    console.log(error);
  }
};
