import dotenv from "dotenv";

dotenv.config();

export default {
  host: process.env.HOST,
  port: process.env.PORT,
  database: {
    DB_HOST: process.env.DB_HOST,
  },
  jwt: {
    accessSecret: process.env.ACCESS_SECRET_KEY,
    refreshSecret: process.env.REFRESH_SECRET_KEY,
  },
  meta: {
    email: process.env.META_EMAIL,
    password: process.env.META_PASSWORD,
  },
};
