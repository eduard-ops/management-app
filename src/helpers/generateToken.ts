import jwt from "jsonwebtoken";

import config from "../config";

const {
  jwt: { accessSecret },
} = config;

export const generateToken = (id: string) => {
  const payload = {
    id: id,
  };

  const accessToken = jwt.sign(payload, `${accessSecret}`, {
    expiresIn: "3h",
  });

  return accessToken;
};
