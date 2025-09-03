import express from "express";
import userRoutes from "./user.routes.js";

const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes);

export default apiRoutes;
