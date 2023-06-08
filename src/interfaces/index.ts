import { Types } from "mongoose";

export interface UserI {
  _id: Types.ObjectId;
  email: string;
  password: string;
  accessToken: string | null;
  refreshToken: string | null;
  verifyEmail: string | boolean;
  verificationToken: string;
}
