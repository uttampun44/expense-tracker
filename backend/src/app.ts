import express from "express";
import dotenv from "dotenv";
import home from "./routes/home.ts";

dotenv.config();

const app = express();
const router = app.router;

router.use("/", home);

export default app;