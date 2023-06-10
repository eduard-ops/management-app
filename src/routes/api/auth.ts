import Router from "express";

const router = Router();

import { auth } from "../../controllers";

import { validation, ctrlWrapper } from "../../middlewares";

import { joiSchemaSignup, joiSchemaSignin } from "../../schemas";

router.post("/signup", validation(joiSchemaSignup), ctrlWrapper(auth.signup));

router.post("/signin", validation(joiSchemaSignin), ctrlWrapper(auth.signin));

// router.get("/logout", async (_, res) => {
//   res.json({ message: "template message" });
// });

export default router;
