import { Schema, model } from "mongoose";

import Joi from "joi";

import { UserI } from "../interfaces";

import { signupType, signinType } from "../types";

/* eslint-disable no-useless-escape */
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\?\.,!_\-~\$%\+=@#\^&])(?=.*?[0-9])\S{8,}$/;

const userSchema = new Schema<UserI>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    role: {
      type: String,
      enum: ["admin", "boss", "user"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [8, "Password must be at least 8, got {VALUE}"],
      match: passwordRegex,
    },
    accessToken: {
      type: String,
      default: null,
    },
    bossId: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

const User = model<UserI>("user", userSchema);

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
  bossId: Joi.string().trim(),
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

export { User, joiSchemaSignup, joiSchemaSignin };
