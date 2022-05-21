import minimist from "minimist";

const options = {
    alias: {
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    },
    default: {
        modo: 'prod',
        puerto: 3000,
        debug: false
    }
}

const { modo, puerto, debug, _ } = minimist(process.argv.slice(2), options);

console.log({modo, puerto, debug, otros: _});




