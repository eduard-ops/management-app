import { Types } from "mongoose";

export interface UserI {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: "admin" | "boss" | "user";
  accessToken: string | null;
  bossId: string | null;
}
