/* -------------------------------- Librerias ------------------------------- */
const express = require('express');
const { engine } = require('express-handlebars');
const Contenedor = require('../../Contenedor');


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

async function update_product(path_file, id, prodUpdate) {
    const container = new Contenedor(path_file);
    let prod = await container.updateById(id, prodUpdate);
    return prod;
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

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "index.hbs",
      layoutsDir: __dirname + "/views/layouts",
      partialsDir: __dirname + "/views/partials",
    })
  );

/* -------------------------------- Endpoints ------------------------------- */
// Home
app.get('', (req, res) => {
    res.render('main', {});
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});