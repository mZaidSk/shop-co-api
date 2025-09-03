import express from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";

const apiRoutes = express.Router();

apiRoutes.use("/products", productRoutes);
apiRoutes.use("/users", userRoutes);

export default apiRoutes;
