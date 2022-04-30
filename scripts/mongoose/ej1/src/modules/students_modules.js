import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    dni: {
        type: String,
        index: true,
        required: true,
    },
    curso: {
        type: String,
        required: true,
    },
    nota: {
        type: Number,   
        index: true,
        required: true,
    },
});

export const StudentModel = mongoose.model('Student',  Schema);


