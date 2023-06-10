import { UserI } from "../../interfaces";
import { User } from "../../models";

export const getUserById = async (
  id: string
): Promise<UserI | undefined | null> => {
  try {
    const user = await User.findById(id).select("-password -accessToken");
    return user;
  } catch (error) {
    console.log(error);
  }
};
