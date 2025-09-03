import express from "express";
import type { Application } from "express";
import apiRoutes from "./routes/index.js";

const app: Application = express();

app.use(express.json());

// Routes

app.use("/api", apiRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
