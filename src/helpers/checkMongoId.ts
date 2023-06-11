import { createError } from "./createError";

import mongoose from "mongoose";

export const checkMongoId = (
  bossId: string,
  status: number,
  messge: string
): void => {
  mongoose.Types.ObjectId.isValid(bossId) ||
    (() => {
      throw createError(status, messge);
    })();
};
