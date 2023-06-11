import { UserI } from "../../interfaces/user";
import { User } from "../../models";

export const updateBossId = async (
  subId: string,
  newBossId: string
): Promise<UserI | null | undefined> => {
  try {
    const data = await User.findByIdAndUpdate(
      subId,
      { bossId: newBossId },
      { new: true }
    ).select("-password -accessToken");
    return data;
  } catch (error) {
    console.log(error);
  }
};
