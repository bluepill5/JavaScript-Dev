const express = require('express');

const app = express();
let count = 0;

app.get('/', (req, res) => {
    res.send(`🚀 Hola desde el servidor express 🚀`);
});

app.get('/objeto', (req, res) => {
    res.json({name: "bluepill5", emoji: "🔥"});
});

app.get('/conteo', (req, res) => {
    count++;
    res.send(`El contador es: ${count}`);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});

