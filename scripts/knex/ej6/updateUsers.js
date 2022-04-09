import { knex } from "./db.js";

async function updateUsers() {
    try {
        await knex.from('usuarios').update({name: 'Alexandro', lastName: 'Mayoral'}).where('id', 1);
        console.log('Información actualizada');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

updateUsers();

