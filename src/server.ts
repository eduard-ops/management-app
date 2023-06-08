import { app } from "./app";

import mongoose from "mongoose";

import config from "./config";

const {
  database: { DB_HOST },
  port: PORT = 3000,
} = config;

const startServer = async () => {
  try {
    await mongoose.connect(DB_HOST!);
    app.listen(PORT, () =>
      console.log(
        `The database is connected, the application is running on port ${PORT}`
      )
    );
  } catch (error) {
    error instanceof Error
      ? console.log(error.message)
      : console.log("Another Error");
    process.exit(1);
  }
};

startServer();
