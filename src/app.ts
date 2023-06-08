import express, { Response } from "express";

import cors from "cors";

import dotenv from "dotenv";

import authRouter from "./routes/api/auth";


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res: Response) => res.send("Hello Docker"));

app.use("/api/auth", authRouter);

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
