import { UserI } from "../interfaces/user";

type signupType = Pick<UserI, "email" | "password" | "role" | "bossId">;

type signinType = Pick<UserI, "email" | "password">;

type ResponseSignin = { message: string; data: { accessToken: string } };

type ResponseSignup = {
  message: string;
  data: { user: { email?: string; role?: string } };
};

export type { signupType, signinType, ResponseSignin, ResponseSignup };
