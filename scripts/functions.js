/* ---------------------------- return implicito ---------------------------- */
const getPersona = (() => { 
    nombre: 'coderhouse'; 
});

// console.log(getPersona());

/* -------------------------------- callbacks ------------------------------- */

const ejecutar = (funcion) => funcion();

const saludar = () => console.log('Hola coder');

// ejecutar(saludar);
// ejecutar(() => console.log('Otro callback'));

const ejecutar_2 = (funcion, parametro) => funcion(parametro);
const saludar_2 = (parametro) => console.log(`Hola ${parametro}`);

// ejecutar_2(saludar_2, 'CoderHouse backend 2855');

/* -------------------------------- Ejemplo 1 ------------------------------- */

const operacion = (a, b, funcion) => funcion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

// console.log(operacion(1, 2, suma));
// console.log(operacion(1, 2, resta));
// console.log(operacion(1, 2, multiplicacion));
// console.log(operacion(1, 2, division));

/* -------------------------------- promesas -------------------------------- */

const division_p = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('b no puede ser igual a cero');
        } else {
            resolve(a / b);
        }
    });
};

// console.log(operacion(1, 0, division_p));
// console.log(operacion(1, 2, division_p));

division_p(10, 2)
    .then((resultado) => {
        // console.log(resultado);
        return resultado;
    })
    .then((resultado) => {
        // console.log(resultado * 5);
    })
    .catch((err) => {
        console.log(err);
    })

/* ------------------------- programacion sincronica ------------------------ */

function funA() {
    console.log(1);
    funB();
    console.log(2);
}

function funB() {
    console.log(3);
    funC();
    console.log(4);
}

function funC() {
    console.log(5);
}

// funA();


/* --------------------------------- timers --------------------------------- */

// setTimeout(() => {
//     console.log('timer 5000ms');
// }, 5000);

// let count = 0;
// setInterval(() => {
//     console.log(count++);
// }, 1000);

/* --------------------------------- ejemplo -------------------------------- */

const mostrarLetras = (palabra, cb) => {
    let count = 0;
    const timer = setInterval(() => {
        console.log(palabra[count]);
        count++;
        if (count >= palabra.length) {
            clearInterval(timer);
            cb();
        }
    }, 1000);
};

const fin = () => console.log('Terminé!!!');

mostrarLetras('Alexandro', fin);











