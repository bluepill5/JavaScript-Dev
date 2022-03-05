const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1>Hola servidor Http</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`🔥 Servidor escuchando en puerto http://localhost:${PORT}`);
})




