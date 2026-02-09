import express from 'express';
import userRouter from './routes/users.routes.js';
import "dotenv/config";


const app = express();

app.use(express.json());
app.use('/users', userRouter);

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});