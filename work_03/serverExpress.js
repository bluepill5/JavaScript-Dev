/* -------------------------------- Librerias ------------------------------- */
const express = require('express');
const Contenedor = require('./Contenedor');

/* -------------------------------- Productos ------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Servidor Express                              */
/* -------------------------------------------------------------------------- */
const app = express();


/* -------------------------------- Endpoints ------------------------------- */


/* --------------------------- Inicializa servidor -------------------------- */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});










