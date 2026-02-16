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

export class EventosUsuariosController {
    static async getUserEvents(req, res) {
        const idUsuario = parseInt(req.params.idUsuario);
        let userEvents = await prisma.eventos_usuarios.findMany({
            where: {
                id_usuario: idUsuario,
            },
            include: {
                evento: {
                    include: {
                        municipio: true,
                    },
                },
            },
        });

        userEvents = userEvents.map((userEvent) => userEvent.evento);

        res.status(200).json(userEvents);
    }

    static async create(req, res) {
        const { id_usuario, id_evento } = req.body;
        const newEventoUsuario = await prisma.eventos_usuarios.create({
            data: {
                id_usuario: id_usuario,
                id_evento: id_evento,
            },
        });

        res.status(200).json(newEventoUsuario);
    }

    static async delete(req, res) {
        const { idUsuario, idEvento } = req.params;

        const deleteEventoUsuario = await prisma.eventos_usuarios.deleteMany({
            where: {
                id_usuario: parseInt(idUsuario),
                id_evento: parseInt(idEvento),
            }
        });

        if (deleteEventoUsuario.count === 0) return res.status(404).json({ error: 'Registro no encontrado' });

        res.status(204).send();
    }
}