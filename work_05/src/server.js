/* -------------------------------- Librerias ------------------------------- */
const fs = require('fs');
const express = require('express');
const http = require('http');
const { engine } = require('express-handlebars');
const Contenedor = require('../Contenedor');


/* -------------------------------- Productos ------------------------------- */
let path_file = './productos.json';
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
/*                    Servidor Express & Websockets                           */
/* -------------------------------------------------------------------------- */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

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

/* ------------------------------- Websockets ------------------------------- */
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

let today = new Date();
let time = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const messages = [
    {
        email: "bluepill5",
        datemessage: time,
        text: "Hola!!! en que podemos ayudarte???",
    },
];

const products_stream = JSON.parse(fs.readFileSync(path_file));;

io.on("connection", (socket) => {
  // Enviamos todos los mensajes al cliente cuando se conecta
  io.sockets.emit("messageBack", messages);
  io.sockets.emit("messageBackProds", products_stream);

  // Recibimos los mensajes desde el frontend
  // Chat
  socket.on("messageFront", (data) => {
    messages.push(data);
    // io.sockets.emit("message", data);
    io.sockets.emit("messageBack", messages);
  });

  // Products
  socket.on("messageFrontProds", (data) => {
    post_product(path_file, data);
    products_stream.push(data);
    // let products = get_products(path_file);
    // products.then((prods) => {
    //     io.sockets.emit("messageBackProds", prods);
    // });
    io.sockets.emit("messageBackProds", products_stream);
  });
});


/* --------------------------------- Routers -------------------------------- */
const router_products = express.Router();

/* -------------------------------- Endpoints ------------------------------- */
// Home
app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/formulario', (req, res) => {
    let products = get_products(path_file);
    products.then((prods) => {
        res.render('form', {
            prods,
            exist_product: prods.length > 0
        });
    });
});

router_products.get('/', (req, res) => {
    let products = get_products(path_file);
    products.then((prods) => {
        res.render('products', {
            prods,
            exist_product: prods.length > 0
        });
    });
});

router_products.post('/', (req, res) => {
    const { body } = req;
    let new_prod_id = post_product(path_file, body);
    new_prod_id.then((id) => {
        res.send('<script>alert("Informaci??n guardada");window.location.href="/formulario";</script>');
    });
});

/* ---------------------------------- Chat ---------------------------------- */
app.get('/chat', (req, res) => {
    res.render('chat', {});
});

/* -------------------------- Inicializar Servidor -------------------------- */
// Routers
app.use('/productos', router_products);

const PORT = 8080;
server.listen(PORT, () => {
console.log(`???? Servidor escuchando con Express en puerto http://localhost:8080`);
});
