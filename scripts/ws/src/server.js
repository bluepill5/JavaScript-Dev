const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

const messages = [
    {
        author: "Diego",
        text: "Hola",
    },
    {
        author: "Jorge",
        text: "Como están?",
    },
    {
        author: "Ana",
        text: "Hola grupo",
    },
];

io.on('connection', (socket) => {
    // Mensaje cuando se conecta un cliente nuevo 
    console.log('💻 Nuevo usuario conectado');
    socket.emit('mensajeConexion', '🔥 Bienvenidos al websockect!!!');
    // Enviamos todos los mensajes al nuevo cliente cuando se conecta
    io.sockets.emit('messageBack', messages);

    socket.on('disconnect', () => {
        console.log('❌ Usuario desconectado');
    });
    socket.on('mensajeRespuesta', (data) => {
        console.log(data);
    });
    // Recibimos los mensajes desde el front
    socket.on('messageFront', (data) => {
        messages.push(data);
        // io.sockets.emit('message', data);
        io.sockets.emit('messageBack', messages);
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const PORT = 8080;
server.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});
