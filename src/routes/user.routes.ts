import { Router } from "express";
import { userController } from "../controllers/index.js";

const { getUsers, createUser } = userController;

const router = Router();

// router.get("/", getUsers);
// router.post("/", createUser);

router.route("/").get(getUsers).post(createUser);

export default router;
