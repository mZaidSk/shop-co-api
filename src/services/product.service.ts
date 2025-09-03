import prisma from "../config/db.js";
import type { Product } from "@prisma/client";

// Service methods
export const getAllProduct = async (): Promise<Product[]> => {
    console.log("Service: Getting all users from the database");
    // const query = `SELECT * FROM products`;
    return prisma.product.findMany();
};
