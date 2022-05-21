import Yargs from "yargs";

const args = Yargs(process.argv.slice(2)).default({
    nombre: 'Coderhouse',
    apellido: 'Backend'
}).alias({
    a: 'AliasA'
}).boolean('AliasA').argv;

console.log(args);



