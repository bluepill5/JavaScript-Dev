/* -------------------------------- Librerias ------------------------------- */
const express = require('express');
const Contenedor = require('./Contenedor');

/* -------------------------------- Productos ------------------------------- */
let path_file = './work_03/productos.json';
async function get_products(path_file) {
    const container = new Contenedor(path_file);
    let prods = await container.getAll();
    return prods;
}

async function get_product(path_file, id) {
    const container = new Contenedor(path_file);
    let prod = await container.getById(id);
    return prod;
}

async function post_product(path_file, newProduct) {
    const container = new Contenedor(path_file);
    let new_prod_id = await container.save(newProduct);
    return new_prod_id;
}

async function delete_product(path_file, id) {
    const container = new Contenedor(path_file);
    let prod = await container.deleteById(id);
    return prod;
}

/* -------------------------------------------------------------------------- */
/*                              Servidor Express                              */
/* -------------------------------------------------------------------------- */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./work_03/public'));

/* --------------------------------- Routers -------------------------------- */
const router_products = express.Router();

/* -------------------------------- Endpoints ------------------------------- */
/* ----------------------------------- GET ---------------------------------- */
// Home
app.get('', (req, res) => {
    res.sendFile('index.html');
});

// Obtenemos todos los productos
router_products.get('/', (req, res) => {
    let products = get_products(path_file);
    products.then((prods) => {
        res.status(200).json(prods);
    });
});

// Obtenemos un producto por id
router_products.get('/:id', (req, res) => {
    const { id } = req.params;
    let prod = get_product(path_file, id);
    prod.then((prod) => {
        res.status(200).json(prod);
    });
});

/* ---------------------------------- POST ---------------------------------- */
// Agregamos un producto nuevo
router_products.post('/', (req, res)  => {
    const { body } = req;
    let new_prod_id = post_product(path_file, body);
    new_prod_id.then((id) => {
        res.status(200).json({
            id
        })
    })
});

/* ----------------------------------- PUT ---------------------------------- */
// Actualizamos un producto por su id
router_products.put('', (req, res) => {

});


/* --------------------------------- DELETE --------------------------------- */
// Eliminamos un producto por su id
router_products.delete('/:id', (req, res) => {
    const { id } = req.params;
    let prod = delete_product(path_file, id);
    prod.then((prod) => {
        res.status(200).json(prod);
    });
});


/* --------------------------- Inicializa servidor -------------------------- */

// Routers
app.use('/api/productos', router_products);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});










