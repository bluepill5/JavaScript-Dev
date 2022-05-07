import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';

dotenv.config();

app.use(session({
    secret: process.env.SECRET
    resave: true,
    saveUninitialized: true,
}));

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = PORT;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:PORT`);
});

server.on('error', (err) => {
console.log(err);
});