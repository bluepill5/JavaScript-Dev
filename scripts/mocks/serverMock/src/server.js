import express, { json, urlencoded } from 'express';
import UserRouter from './routers/user.routes.js';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/usuarios/', new UserRouter());

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});