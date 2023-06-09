import Router from "express";

const router = Router();

import { users } from "../../controllers";

import { ctrlWrapper, auth } from "../../middlewares";

router.get("/", auth, ctrlWrapper(users.getUsers));

export default router;
