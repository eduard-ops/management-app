import Router from "express";

const router = Router();

import { auth } from "../../controllers";

import { validation, ctrlWrapper } from "../../middlewares";

import {
  joiSchemaUser,
  joiSchemaVerifyCode,
  joiSchemaVerify,
} from "../../models/user";

router.post("/signup", validation(joiSchemaUser), ctrlWrapper(auth.signup));

router.post("/signin", validation(joiSchemaUser), ctrlWrapper(auth.signin));

router.post(
  "/verify",
  validation(joiSchemaVerifyCode),
  ctrlWrapper(auth.verifyEmail)
);

router.put(
  "/verify/again",
  validation(joiSchemaVerify),
  ctrlWrapper(auth.againSendVerify)
);

// router.get("/logout", async (_, res) => {
//   res.json({ message: "template message" });
// });

export default router;
