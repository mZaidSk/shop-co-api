import express from "express";
import type { Application } from "express";
import apiRoutes from "./routes/index.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

const app: Application = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

app.use("/health-check", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is healthy" });
});

app.use("/api", apiRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
