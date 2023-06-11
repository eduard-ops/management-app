import Router from "express";

const router = Router();

import { users } from "../../controllers";

import { ctrlWrapper, auth, validation } from "../../middlewares";

import { joiSchemaChangeBossId } from "../../schemas/user";

router.get("/", auth, ctrlWrapper(users.getUsers));

router.patch(
  "/",
  auth,
  validation(joiSchemaChangeBossId),
  ctrlWrapper(users.changeBoss)
);

export default router;
