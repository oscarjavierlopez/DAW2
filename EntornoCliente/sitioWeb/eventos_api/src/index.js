import express from 'express';
import  eventosRouter from './routes/eventos.routes.js';
import  usuariosRouter from './routes/usuarios.routes.js';
import "dotenv/config";


const app = express();

app.use(express.json());
app.use('/eventos', eventosRouter);
app.use('/usuarios', usuariosRouter);


const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});