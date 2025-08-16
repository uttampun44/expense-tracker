import express from "express";
import dotenv from "dotenv";
import home from "./routes/home.ts";
import connectDB from "./database/connection.ts";

dotenv.config();

connectDB();
const app = express();
const router = app.router;

router.use("/", home);

export default app;