import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  database: {
    DB_HOST: process.env.DB_HOST,
  },
  jwt: {
    accessSecret: process.env.ACCESS_SECRET_KEY,
  },
};
