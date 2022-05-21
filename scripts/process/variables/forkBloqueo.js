import express, { json, urlencoded } from 'express';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

function calculo() {
    let sum = 0;
    for (let i = 0; i < 2e6; i++) {
        sum++;
        console.log(sum); 
    }
    return sum;
}

let visitas = 0;

app.get('/calculo', (req, res) => {
    const resultado = calculo();
    res.status(200).json({ resultado });
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

