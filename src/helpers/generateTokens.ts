import dotenv from "dotenv";

import jwt from "jsonwebtoken";

dotenv.config();

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

export const generateTokens = (id: string) => {
  console.log(id);
  const payload = {
    id: id,
  };

  const accessToken = jwt.sign(payload, `${ACCESS_SECRET_KEY}`, {
    expiresIn: "2m",
  });

  const refreshToken = jwt.sign(payload, `${REFRESH_SECRET_KEY}`, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
