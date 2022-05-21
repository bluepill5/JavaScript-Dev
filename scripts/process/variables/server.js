import express, { json, urlencoded } from 'express';
// import { config } from './config.js';
import {fileURLToPath} from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: process.env.MODO === 'DEV' ? __dirname + '/.env1': __dirname + '/.env2',
});

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:${PORT}`);
});

server.on('error', (err) => {
console.log(err);
});