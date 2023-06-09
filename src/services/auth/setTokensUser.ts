import { User } from "../../models";

export const setTokenUser = async (
  _id: string,
  accessToken: string
): Promise<void> => {
  try {
    await User.findByIdAndUpdate(_id, { accessToken });
  } catch (error) {
    console.log(error);
  }
};
