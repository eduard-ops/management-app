import { Response } from "express";
import { Roles } from "../../enums";
import { createError } from "../../helpers";
import { UserI, AuthRequest } from "../../interfaces/user";
import { findUsersIdBoss, updateBossId } from "../../services/users";
import { checkMongoId } from "../../helpers";
import { ResponseUpdateBoss } from "../../types/user";

export const changeBoss = async (
  req: AuthRequest,
  res: Response<{ message: string; data: ResponseUpdateBoss }>
) => {
  const { _id, role } = req.user as UserI;
  const { subId, newBossId = null } = req.body;
  if (role !== Roles.BOSS) {
    throw createError(
      401,
      "Only a user with the boss role can change the boss"
    );
  }

  const checkSubordinates = await findUsersIdBoss(_id);
  if (!checkSubordinates?.length) {
    throw createError(404, "This boss has not subordinates");
  }

  if (subId) checkMongoId(subId, 400, "Invalid subId");
  if (newBossId) checkMongoId(newBossId, 400, "Invalid newBossId");

  const findSubordinate = checkSubordinates.findIndex(
    (item) => item._id.toString() === subId
  );

  findSubordinate === -1 &&
    (() => {
      throw createError(
        404,
        `User with id = ${subId} is not a subordinate of this boss`
      );
    })();

  const check = await findUsersIdBoss(newBossId);
  check ||
    (() => {
      throw createError(404, `New boss id not found`);
    })();

  const data = await updateBossId(subId, newBossId);

  res.status(201).json({
    message: "Change of boss successful",
    data: data!,
  });
};
