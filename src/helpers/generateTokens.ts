import jwt from "jsonwebtoken";

import config from "../config";

const {
  jwt: { accessSecret, refreshSecret },
} = config;

export const generateTokens = (id: string) => {
  const payload = {
    id: id,
  };

  const accessToken = jwt.sign(payload, `${accessSecret}`, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign(payload, `${refreshSecret}`, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
