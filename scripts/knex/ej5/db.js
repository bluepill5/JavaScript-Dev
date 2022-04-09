const { config } = require('./config.js');
const knex = require('knex')(config);

console.log(config);

async function db() {
    try {
        const personas = await knex.select().from('PERSONAS');
        console.log(personas);
    } catch (error) {
        console.log(error);
    }
}

db();


