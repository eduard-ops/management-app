import { Schema, model } from "mongoose";

import Joi from "joi";

import { UserI } from "../interfaces";

/* eslint-disable no-useless-escape */
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\?\.,!_\-~\$%\+=@#\^&])(?=.*?[0-9])\S{8,}$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
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
    refreshToken: {
      type: String,
      default: null,
    },
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
      default: null,
    },
  },
  { versionKey: false }
);

const User = model<UserI>("user", userSchema);

const joiSchemaUser = Joi.object({
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

const joiSchemaVerifyEmail = Joi.object({
  email: Joi.string()
    .max(80)
    .trim()
    .regex(emailRegexp, "Invalid email address")
    .required(),
});

export { User, joiSchemaUser, joiSchemaVerifyEmail };
