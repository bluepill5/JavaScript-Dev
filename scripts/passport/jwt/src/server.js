import express, { json, urlencoded } from 'express';
import './config/db.js';
import UserRouter from './routers/user.routers.js';
import AuthRouter from './routers/auth.routers.js';
import { isAuth } from './middlewares/auth.middlewares.js';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/user', UserRouter);
app.use('/login', AuthRouter);

app.get('/auth', isAuth, (req, res) => {
    console.log('Estás autenticado!');
    res.send('Estás autenticado!');
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});