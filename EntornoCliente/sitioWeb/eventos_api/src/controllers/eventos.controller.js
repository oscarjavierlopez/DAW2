import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { Prisma, PrismaClient } from '@prisma/client';
import { use } from "react";

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5
});

const prisma = new PrismaClient({ adapter });

export class EventosApiController {
    static async login(req, res) {
        const { nombre, contrasena } = req.body;

        const usuario = await prisma.usuarios.findFirst({
            where: {
                AND: [
                    { nombre: nombre },
                    { contrasena: contrasena },
                ],
            },
            include: {
                rol: true,
                eventos: true,
            },
        });

        if (!usuario) return res.status(404).json({
            success: false,
            error: "Usuario no encontrado"
        });

        res.status(200).json({
            success: true,
            user: {
                id: usuario.id,
                nombre: usuario.nombre,
                rol: usuario.rol.rol,
                eventos: usuario.eventos,
            }
        });
    }

    static async index(req, res) {
        const date = new Date();

        const eventos = await prisma.eventos.findMany({
            where: {
                fecha: {
                    gt: date,
                },
            },
            include: {
                municipio: true,
            },
        });

        res.status(200).json(eventos);
    }

    static async getById(req, res) {
        const id = parseInt(req.params.id);

        const event = await prisma.eventos.findUnique({
            where: {
                id: id,
            },
            include: {
                municipio: true,
            },
        });

        if (!event) return res.status(404).json({ error: 'evento no encontrado' });

        res.status(200).json(event);
    }

    static async create(req, res) {
        const { nombre, fecha, descripcion, imagen, id_municipio } = req.body;

        const new_evento = await prisma.eventos.create({
            data: {
                nombre: nombre,
                fecha: new Date(fecha),
                descripcion: descripcion,
                imagen: imagen,
                id_municipio: id_municipio,
            },
        });

        res.status(201).json(new_evento);
    }

    static async update(req, res) {
        const id = parseInt(req.params.id);
        const { nombre, fecha, descripcion, imagen, id_municipio } = req.body;

        try {
            const evento_actualizar = await prisma.eventos.update({
                where: {
                    id: id,
                },
                data: {
                    ...(nombre !== undefined && { nombre: nombre }),
                    ...(fecha !== undefined && { fecha: new Date(fecha) }),
                    ...(descripcion !== undefined && { descripcion: descripcion }),
                    ...(imagen !== undefined && { imagen: imagen }),
                    ...(id_municipio !== undefined && { id_municipio: id_municipio }),
                },
            });

            res.status(200).json(evento_actualizar);
        } catch {
            return res.status(404).json({ error: 'evento no encotrado' })
        }
    }

    static async delete(req, res) {
        const id = parseInt(req.params.id);

        try {
            const evento_borrar = await prisma.eventos.delete({
                where: {
                    id: id,
                },
            });

            res.status(200).json(evento_borrar);
        } catch {
            return res.status(404).json({ error: 'evento no encotrado' })
        }
    }
}