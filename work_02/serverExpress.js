/* -------------------------------- Librerias ------------------------------- */
const express = require('express');
const Contenedor = require('./Contenedor');

/* --------------------------- Objeto de productos -------------------------- */
let productsObject = {
    1: {
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    
    2: {
        title: "Calculadora",
        price: 22.47,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    },
    3: {
        title: "Globo Terráqueo",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    },
};

/* ------------------------- Productos (asincronos) ------------------------- */
async function get_products(path_file) {
    const contenedor = new Contenedor(path_file);
    let objs = await contenedor.getAll();
    return objs;
}

let products;
const promise_prods = get_products('./work_02/productos.json');
promise_prods.then(val => {
    products = val;
});

/* -------------------------------------------------------------------------- */
/*                              Servidor Express                              */
/* -------------------------------------------------------------------------- */

const app = express();

/* ------------------------------- End Points ------------------------------- */

app.get('/', (req, res) => {
    res.send(`🚀 Hola desde el servidor Express 🚀`);
});

app.get('/productos_Objeto', (req, res) => {
    res.json(productsObject);
});

app.get('/productoRandom_Objeto', (req, res) => {
    let numProds = Object.keys(productsObject).length;
    let indexRand = Math.floor(Math.random() * numProds);
    // Mostramos un producto de forma aleatoria
    res.json(productsObject[indexRand + 1 ]);
});

app.get('/productos', (req, res) => {
    res.json(products);
})

app.get('/productoRandom', (req, res) => {
    let numProds = Object.keys(products).length;
    let indexRand = Math.floor(Math.random() * numProds);
    // Mostramos un producto de forma aleatoria
    res.json(products[indexRand]);
});

const PORT = 8083;
const server = app.listen(PORT, () => {
    console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});

