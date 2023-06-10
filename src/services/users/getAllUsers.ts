import { UserI } from "../../interfaces/user";
import { User } from "../../models";

export const getAllUsers = async (): Promise<UserI[] | null | undefined> => {
  try {
    const users = await User.find({}).select("-password -accessToken");
    return users;
  } catch (error) {
    console.log(error);
  }
};
