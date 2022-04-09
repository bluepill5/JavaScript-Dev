const { config } = require('./config.js');
const knex = require('knex')(config);

console.log(config);

async function db() {
    try {
        const personas = await knex.select().from('PERSONAS').where('ID', 1);
        console.log(personas);
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

db();


