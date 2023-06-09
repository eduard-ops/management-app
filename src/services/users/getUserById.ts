import { UserI } from "../../interfaces/user";
import { User } from "../../models";
import { Types } from "mongoose";

export const getUserById = async (
  id: Types.ObjectId
): Promise<UserI | undefined | null> => {
  try {
    const user = await User.findById(id).select("-password -accessToken");
    return user;
  } catch (error) {
    console.log(error);
  }
};
