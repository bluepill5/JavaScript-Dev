const winston = require('winston');
winston.format.timestamp()

const loggerProd = winston.createLogger({
    transports: [
        new winston.transports.File({filename: 'debug.log', level: 'debug'}),
        new winston.transports.File({filename: 'error.log', level: 'error'}),
    ]
});

const loggerDev = winston.createLogger({
    transports: [
        new winston.transports.Console({level: 'error'}),
    ]
});

let logger;

if (process.argv[2] == 'PROD') {
    logger = loggerProd;
} else {
    logger = loggerDev;
}

module exports = logger;

