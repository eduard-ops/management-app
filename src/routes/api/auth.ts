import Router from "express";

const router = Router();

import { auth } from "../../controllers";

import { validation, ctrlWrapper } from "../../middlewares";

import { joiSchemaUser, joiSchemaVerifyEmail } from "../../models/user";

router.post("/signup", validation(joiSchemaUser), ctrlWrapper(auth.signup));

router.post("/signin", validation(joiSchemaUser), ctrlWrapper(auth.signin));

router.get("/verify/:verificationToken", ctrlWrapper(auth.verifyEmail));

router.post(
  "/verify",
  validation(joiSchemaVerifyEmail),
  ctrlWrapper(auth.againSendVerify)
);

// router.get("/logout", async (_, res) => {
//   res.json({ message: "template message" });
// });

export default router;
