const express = require('express');

const mascotas = [
    {
        nombre: "Mascota 1",
        raza: "Raza 1",
        edad: 1
    },
    {
        nombre: "Mascota 2",
        raza: "Raza 2",
        edad: 2
    },
    {
        nombre: "Mascota 3",
        raza: "Raza 3",
        edad: 3
    },
];

const data = [
    {
        nombre: "Nombre",
        apellido: "Apellido",
        edad: 30
    }
];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('pages/index', {
        mascotas,
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {});
});

app.get('/ingreso', (req, res) => {
    res.render('pages/ingreso', {
        data,
    })
});

app.post('/ingreso', (req, res) => {
    const { body } = req;
    data.push(body);
    res.send('<script>alert("Información guardada");windows.location.href="/";</script>');
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});