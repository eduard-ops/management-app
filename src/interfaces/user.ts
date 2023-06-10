import { Types } from "mongoose";

import { Request } from "express";

import { Roles } from "../enums";

export interface UserI {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: Roles.ADMIN | Roles.BOSS | Roles.USER;
  accessToken: string | null;
  bossId: string | null;
}

export interface AuthRequest extends Request {
  user?: UserI;
}

export interface subordinatesI {
  _id: Types.ObjectId;
  email: string;
  role: string;
  subordinates: subordinatesI[];
}
