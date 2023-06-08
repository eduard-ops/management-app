import { app } from "./app";

import mongoose from "mongoose";

const { PORT = 4000, DB_HOST = "" } = process.env;

const starttServer = async () => {
  try {
    await mongoose.connect(DB_HOST);
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

starttServer();
