import { createError } from "./createError";

import { checkUserById } from "../services/auth";

import mongoose from "mongoose";

export const checkBossId = async (bossId: string): Promise<void> => {
  mongoose.Types.ObjectId.isValid(bossId) ||
    (() => {
      throw createError(400, "Not valid bossId");
    })();

  const check = await checkUserById(bossId);
  check ||
    (() => {
      throw createError(404, `Boss with id=${bossId} not found`);
    })();
};
