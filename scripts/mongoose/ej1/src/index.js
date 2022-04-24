import './config/db.js';
import { UsersModel } from './modules/users_modules.js';
import { StudentModel } from './modules/students_modules.js';

const estudiantes = [{ nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },{ nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },{ nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },{ nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },{ nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },{ nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },{ nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },{ nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },{ nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },{ nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 },];

const usuario1 = {
    nombres: 'Coderhouse',
    apellidos: 'Backend 1',
    email: 'test@gmail.com',
    usuario: 'coder',
    password: 123456
}

const usuario2 = {
    nombres: 'Coderhouse2',
    apellidos: 'Backend 2',
    email: 'test@gmail.com',
    usuario: 'coder2',
    password: 123456
}

/* -------------------------------------------------------------------------- */
/*                                 Ejercicios                                 */
/* -------------------------------------------------------------------------- */
async function createStudents() {
    try {
        const response = await StudentModel.create(estudiantes);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// createStudents();

async function readEstudiantes() {
    try {
        let response;
        // Ordenado por nombre
        response = await StudentModel.find().sort({nombre: 1});
        // Estudiante más joven
        response = await StudentModel.findOne().sort({edad: 1})
        // Estudiante del curso 2A
        response = await StudentModel.find({curso: '2A'});
        // El segundo estudiante más joven
        response = await StudentModel.findOne().sort({edad: 1}).skip(1);
        // Nombre y curso de los estudiantes ordenados por apellido descendente
        response = await StudentModel.find({}, {_id: 0, nombre: 1, apellido: 1, curso: 1}).sort({apellido: -1});
        // Estudiantes con 10
        response = await StudentModel.find({nota: 10});
        // Promedio de la nota de los alumnos
        response = await StudentModel.find({}, {_id: 0, nota: 1});
        let conteo = await StudentModel.count();
        let sum_notas = response.reduce((acc, curr) => acc + curr.nota, 0);
        console.log(sum_notas / conteo);
    } catch (error) {
        console.log(error);
    }    
}
// readEstudiantes();


/* -------------------------------------------------------------------------- */
/*                                CRUD Mongoose                               */
/* -------------------------------------------------------------------------- */
/* --------------------------------- CREATE --------------------------------- */
async function createUser() {
    try {
        // const response = await UsersModel.create([usuario1, usuario2]);
        // console.log(response);
        const usuario = new UsersModel(usuario1);
        console.log(usuario);
        usuario.save();
    } catch (error) {
        console.log(error);
    }
}
// createUser();

/* -------------------------------- READ ALL -------------------------------- */
async function readAll() {
    try {
        const response = await UsersModel.find();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
readAll();

/* -------------------------------- READ ONE -------------------------------- */
async function readOne() {
    try {
        const response = await UsersModel.findOne();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// readOne();

/* --------------------------------- UPDATE --------------------------------- */
async function update() {
    try {
        const response = await UsersModel.updateOne({
            nombres: 'Coderhouse'
        },
        {
            password: 100000
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 
// update();

/* --------------------------------- DELETE --------------------------------- */
async function deleteUser() {
    try {
        const response = await UsersModel.delete({
            nombres: 'Coderhouse2'
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// deleteUser();

/* ------------------------------- PROJECTIONS ------------------------------ */
// let response = await UsersModel.find({
//     nombres: 'Coderhouse'
// });
// console.log(response);

async function fn() {
    let response = await UsersModel.find({
        nombres: 'Coderhouse'
    },
    {
        _id: 0,
        nombres: 1,
        apellidos: 1,
    }).sort(
        {
            nombres: -1,
        }
    );
    console.log(response);
}
// fn();

