import { signupType, signinType } from "../types/auth";

import Joi from "joi";

/* eslint-disable no-useless-escape */
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\?\.,!_\-~\$%\+=@#\^&])(?=.*?[0-9])\S{8,}$/;

const joiSchemaSignup = Joi.object<signupType>({
  email: Joi.string()
    .max(80)
    .trim()
    .regex(emailRegexp, "Invalid email address")
    .required(),
  password: Joi.string()
    .min(8)
    .trim()
    .regex(passwordRegex, "Password not valid")
    .required(),
  role: Joi.string().trim().valid("admin", "boss", "user").required(),
  bossId: Joi.string().when("role", {
    is: "admin",
    then: Joi.forbidden(),
    otherwise: Joi.when("role", {
      is: "boss",
      then: Joi.optional(),
      otherwise: Joi.required(),
    }),
  }),
});

const joiSchemaSignin = Joi.object<signinType>({
  email: Joi.string()
    .max(80)
    .trim()
    .regex(emailRegexp, "Invalid email address")
    .required(),
  password: Joi.string()
    .min(8)
    .trim()
    .regex(passwordRegex, "Password not valid")
    .required(),
});

export { joiSchemaSignin, joiSchemaSignup };
