import { knex } from "./db.js";

async function readUsers() {
    try {
        const users = await knex.select().from('usuarios');
        console.log(users);
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

readUsers();



