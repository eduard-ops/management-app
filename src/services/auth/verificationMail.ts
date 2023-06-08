import { Types } from "mongoose";
import { User } from "../../models";

export const verificationMail = async (id: Types.ObjectId) => {
  try {
    const data = await User.findByIdAndUpdate(id, {
      verifyEmail: true,
      verificationToken: null,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
