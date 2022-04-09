import { knex } from "./db.js";

async function deleteUser() {
    try {
        await knex.del().from('usuarios').where('id', 2);
        console.log('Usuario borrado');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

deleteUser();

