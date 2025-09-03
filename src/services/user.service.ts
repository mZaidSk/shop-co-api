import prisma from "../config/db.js";
import type { User } from "@prisma/client";

// Service methods
export const getAllUsers = async (): Promise<User[]> => {
    return prisma.user.findMany();
};

export const createUser = async (
    data: Pick<User, "name" | "email" | "password">
): Promise<User> => {
    return prisma.user.create({ data });
};
