import express from "express";
import type { Application } from "express";
import { userRoutes } from "./routes/index.js";

const app: Application = express();

app.use(express.json());

// Routes
app.use("/users", userRoutes);

export default app;
