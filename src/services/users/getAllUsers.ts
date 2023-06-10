import { User } from "../../models";

export const getAllUsers = async () => {
  try {
    const users = await User.find({}).select("-password -accessToken");
    return users;
  } catch (error) {
    console.log(error);
  }
};
