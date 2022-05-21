import minimist from "minimist";

const options = {
    default: {
        nombre: 'Coderhouse',
        apellido: 'Backend'
    },
    alias: {
        C: 'AliasC',
        a1: 'AliasA1'
    }
}

const arg = minimist(process.argv.slice(2), options);

console.log(arg);




