const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./scripts/public'));

// Variables
let frase = 'Hola como esta el mundo actualmente???';
const personas = [];
const mascotas = [];

// Middlewares
const middle = (req, res, next) => {
    console.log(req.body);
    console.log('Hey yo!!!');
    res.status(400).send('Error');
    next();
};

// Routers
const router_msg = express.Router();
const router_personas = express.Router();
const router_mascotas = express.Router(); 

/* ----------------------------------- GET ---------------------------------- */
app.get('/', middle, (req, res) => {
    res.sendFile('index.html');
});

router_msg.get('/', (req, res) => {
    res.status(200).json({mensaje: 'Mensaje GET'});
});

// Query
app.get('/api/usuario', (req, res) => {
    const {dni} = req.query;
    res.status(200).json({mensaje: "GET", dni});
});

// Identificador
app.get('/api/usuario/:dni', (req, res) => {
    const {dni} = req.params.dni;
    res.status(200).json({mensaje: "GET", dni});
});

// Ejemplo
app.get('/api/frase', (req, res) => {
    res.status(200).json({
        frase
    });
});

app.get('/api/letras/:num', (req, res) => {
    const { num } = req.params;

    if (num < 0 || num > frase.length) {
        res.status(200).json({
            msg: 'El número es inválido',
        });
    }

    const character = frase.charAt(num);

    res.status(200).json({
        character
    });
});

app.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params;
    const arrFrase = frase.split(" ");

    if (num < 0 || num > arrFrase.length) {
        res.status(200).json({
            msg: 'El número es inválido',
        });
    }

    const palabra = arrFrase[num];

    res.status(200).json({
        buscada: palabra,
    });

});

router_personas.get('/', (req, res) => {
    res.status(200).json(personas);
});

router_mascotas.get('/', (req, res) => {
     res.status(200).json(mascotas);
});


/* ---------------------------------- POST ---------------------------------- */

app.post('/api/usuario', (req, res) => {
    const { body } = req;
    console.log(body);
});

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body;
    frase += " " + palabra; 
    const arrFrase = frase.split(' ');
    res.status(200).json({
        agregada: palabra,
        pos: arrFrase.length + 1,
        frase,
    });
});

router_personas.post('/', (req, res) => {
    const { body } = req;
    personas.push(body);
    res.status(200).send('Persona agregada');
});

router_mascotas.post('/', (req, res) => {
    const { body } = req;
    mascotas.push(body);
    res.status(200).send('Mascota agregada');
});


/* ----------------------------------- PUT ---------------------------------- */

app.put('/api/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log(id, body);
});

app.put('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const { palabra } = req.body;
    const arrFrase = frase.split(' ');
    const anterior = arrFrase[pos];
    arrFrase[pos] = palabra;
    frase = arrFrase.join(' ');

    res.status(200).json({
        actualizada: palabra,
        anterior,
        frase
    }); 
});

/* --------------------------------- DELETE --------------------------------- */

app.delete('/api/usuario/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
});

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const arrFrase = frase.split(' ');
    arrFrase.splice(pos - 1, 1);
    frase = arrFrase.join(' ');

    res.status(200).json({
        frase
    }); 
});

// Routers
app.use('/api/mensaje', router_msg);
app.use('/api/mascotas', router_mascotas);
app.use('/api/personas', router_personas);

const PORT = 8081;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8081`);
});

server.on('error', (err) => {
console.log(err);
});