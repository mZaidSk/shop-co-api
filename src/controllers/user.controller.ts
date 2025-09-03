import type { Request, Response } from "express";
import type { User } from "@prisma/client";
import { userService } from "../services/index.js";

const { getAllUsers, createUser: createUserService } = userService;

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await getAllUsers();
        res.json(users);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Unknown error occurred" });
        }
    }
};

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, password } = req.body as Pick<
            User,
            "name" | "email" | "password"
        >;

        // ✅ Await the service
        const user: User = await createUserService({
            name,
            email,
            password,
        });

        res.status(201).json(user);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: "Unknown error occurred" });
        }
    }
};
