import type { Request, Response } from "express";
import type { Product } from "@prisma/client";
import { productService } from "../services/index.js";

const { getAllProduct } = productService;

export const getProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        console.log("Fetching all users");
        const users: Product[] = await getAllProduct();
        res.json(users);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Unknown error occurred" });
        }
    }
};
