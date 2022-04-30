import express, { json, urlencoded } from 'express';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca'];
const colores = ['Negro', 'Rojo', 'Azul', 'Verde'];

app.get('/test', (req, res) => {
    const users = [];
    for (let i = 0; i < 10; i++) {
        let user = {
            i: i + 1, 
            nombre: nombres[Math.round(Math.random() * nombres.length - 1)],
            apellido: apellidos[Math.round(Math.random() * apellidos.length - 1)],
            color: colores[Math.round(Math.random() * colores.length - 1)]
        }         
        users.push(user);
    }
    res.status(200).json(users);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});