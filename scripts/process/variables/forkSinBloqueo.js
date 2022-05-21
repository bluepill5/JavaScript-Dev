import express, { json, urlencoded } from 'express';
import { fork } from 'child_process';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

let visitas = 0;

const computo = fork('calculo.js');

app.get('/calculo', (req, res) => {
    computo.on('message', (resultado) => {
        console.log('Resultado: ', resultado);
    });
    computo.send('start');
});
app.get('/visitas', (req, res) => {
    ++visitas;
    res.status(200).json( { visitas });
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});

