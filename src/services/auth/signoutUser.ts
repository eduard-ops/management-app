import { Types } from "mongoose";
import { User } from "../../models";

export const signoutUser = async (id: Types.ObjectId): Promise<void> => {
  try {
    await User.findByIdAndUpdate(id, { accessToken: null });
  } catch (error) {
    console.log(error);
  }
};
