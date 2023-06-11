import express, { Response } from "express";

import cors from "cors";

import authRouter from "./routes/api/auth";

import usersRouter from "./routes/api/users";

import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRouter);

app.use("/api/users", usersRouter);

app.use((_, res: Response<{ message: string }>) => {
  res.status(404).json({ message: "Not found" });
});

app.use(
  (
    err: Error & { status: number },
    _,
    res: Response<{ message: string }>,
    __
  ) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  }
);

export { app };
