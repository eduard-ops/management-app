import Router from "express";

const router = Router();

import { auth } from "../../controllers";

import { validation, ctrlWrapper } from "../../middlewares";

import { auth as authMiddleware } from "../../middlewares";

import { joiSchemaSignup, joiSchemaSignin } from "../../schemas";

router.post("/signup", validation(joiSchemaSignup), ctrlWrapper(auth.signup));

router.post("/signin", validation(joiSchemaSignin), ctrlWrapper(auth.signin));

router.get("/signout", authMiddleware, ctrlWrapper(auth.signout));

export default router;
