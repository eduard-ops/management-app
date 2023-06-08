import { User } from "../../models";

export const setTokenUser = async (
  _id: string,
  accessToken: string,
  refreshToken: string
) => {
  try {
    await User.findByIdAndUpdate(_id, { accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
};
