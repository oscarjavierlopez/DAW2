import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { Prisma, PrismaClient } from '@prisma/client';
import { validationResult } from 'express-validator';
import { use } from "react";

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5
});

const prisma = new PrismaClient({ adapter });

export class UsersApiController {
    static async getAllUsers(req, res) {
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    }

    static async getUserById(req, res) {
        const userId = parseInt(req.params.id);
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (user) return res.status(200).json(user);

        res.status(404).json({ message: 'User not found' });
    }

    static async createUser(req, res) {

        const errors = validationResult(req).formatWith(({ msg, path, value }) => {
            return {
                campo: path,
                mensaje: msg,
                valor: value
            };
        });

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
        }

        const { nombre, email, edad } = req.body;

        const newUser = await prisma.users.create({
            data: {
                nombre: nombre,
                email: email,
                edad: edad,
            },
        });

        res.status(201).json(newUser);
    }

    static async updateUser(req, res) {
        const userId = parseInt(req.params.id);
        const userToUpdate = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!userToUpdate) return res.status(404).json({ message: 'User not found' });

        const errors = validationResult(req).formatWith(({ msg, path, value }) => {
            return {
                campo: path,
                mensaje: msg,
                valor: value
            };
        });

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
        }

        const { nombre, email, edad } = req.body;

        const updateUser = await prisma.users.update({
            where:{
                id: userId,
            },
            data:{
                ...(nombre !== undefined && {nombre: nombre}),
                ...(email !== undefined && {email: email}),
                ...(edad !== undefined && {edad: edad}),
            },
        });

        res.status(200).json(updateUser);
    }

    static async deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        const userToDelete = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!userToDelete) return res.status(404).json({ message: 'User not found' });

        const deleteUser = await prisma.users.delete({
            where: {
                id: userId,
            },
        });

        res.status(204).send();
    }
}