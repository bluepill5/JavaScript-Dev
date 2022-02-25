const fs = require('fs');

/* -------------------------------------------------------------------------- */
/*                                    Files                                   */
/* -------------------------------------------------------------------------- */
/* ---------------------------- escribir archivo ---------------------------- */
const objeto = {
    nombre: 'Coderhouse',
    curso: 28855
}


fs.writeFileSync('archivo.txt', 'Esto es data\n');
fs.writeFileSync('archivo.txt', JSON.stringify(objeto));

/* ------------------------------ leer archivo ------------------------------ */

const data = fs.readFileSync('archivo.txt', 'utf-8');
console.log('Leer archivo sync: ', JSON.parse(data));   


/* ----------------------------- editar archivo ----------------------------- */

fs.appendFileSync('archivo.txt', '\nData agregada\n');

/* ----------------------------- borrar archivo ----------------------------- */

fs.unlinkSync('archivo.txt');

// try {
//     fs.unlinkSync('archivo.txt');
// } catch (error) {
//     console.log(error);
//     // throw new Error(error);
// }

/* -------------------- código asincronico con callbacks -------------------- */

fs.writeFile('archivo2.txt', 'Data async', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Archivo creado!!!');
    }
})


/* ----------------------- leer archivo con callbacks ----------------------- */

fs.readFile('archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

/* ---------------------------- editar el archivo --------------------------- */

fs.appendFile('archivo2.txt', 'Data nueva async', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo editado');
    }
});

/* ----------------------------- borrar archivo ----------------------------- */

fs.unlink('archivo2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo borrado');
    }
});


/* ------------------------------ crear carpeta ----------------------------- */

fs.mkdir('NuevaCarpeta', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Carpeta creada');
    }
});

async function crearArchivo() {
    await fs.promises.writeFile('archivo3.txt', 'Async/Await');
    const data = await fs.promises.readFile('archivo3.txt', 'utf-8');
    console.log(data);
}

crearArchivo();









