import Minimist from "minimist";

process.on('exit', (code) => {
    console.log(code);
})

const args = Minimist(process.argv.slice(2));

const crearError = () => {
    const tipos = [];
    for (let value of args._) {
        tipos.push(typeof value);
    }
    console.log({
        error: {
            descripcion: 'Error de tipo',
            numeros: args._,
            tipos,
        }
    });
    process.exit(-5);
}

const promedio = (numeros) => {
    if (numeros.length === 0) {
        console.log({
            error: {
                descripcion: 'Entrada vacía'
            }
        });
        process.exit(-4);
    }
    for (const value of numeros) {
        if(typeof value !== 'number') crearError();
    }

    const suma = numeros.reduce((num, acc) => num + acc);
    const promedio = suma / numeros.length;
    return promedio;
}

console.log({
    datos: {
        numeros: args._,
        promedio: promedio(args._ ),
    }
});













