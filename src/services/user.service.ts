import prisma from "../config/db.js";
import type { User } from "@prisma/client";

// Service methods
export const getAllUsers = async (): Promise<User[]> => {
    console.log("Service: Getting all users from the database");
    // const query = `SELECT * FROM users`;
    return prisma.user.findMany();
};

export const createUser = async (
    data: Pick<User, "name" | "email" | "password">
): Promise<User> => {
    return prisma.user.create({ data });
};

// ORM Object Relational Mapping
// It helps prevent SQL Injection by using parameterized queries
// instead of directly embedding user input into SQL strings.

// Additional service methods (e.g., getUserById, updateUser, deleteUser) can be added here
// as needed.

// ...existing code...

var id: number | string = "1 OR 1=1"; // Malicious input

const query = `SELECT * FROM users WHERE id = ${id}`;
// Resulting query: SELECT * FROM users WHERE id = 1 OR 1=1

// This will return all users, not just the one with id=1
