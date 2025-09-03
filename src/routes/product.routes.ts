import { Router } from "express";
import { productController } from "../controllers/index.js";

const { getProducts } = productController;

const router = Router();

router.get("/", getProducts);
// router.post("/", createUser);

router.route("/").get(getProducts);

export default router;
