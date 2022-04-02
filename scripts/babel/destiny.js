'use strict';

var list = [2, 3, 5, 7];

list.map(function (x) {
    return x * x;
}).forEach(function (x) {
    return console.log(x);
});

var persona = {
    nombre: 'Coderhouse',
    edad: 30
};

console.log(persona);
