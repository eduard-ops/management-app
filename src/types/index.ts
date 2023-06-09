import { UserI } from "../interfaces";

type signupType = Pick<UserI, "email" | "password" | "role" | "bossId">;

type signinType = Pick<UserI, "email" | "password">;

export type { signupType, signinType };
