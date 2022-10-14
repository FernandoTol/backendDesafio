import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        match: /.*@.*\..*/
    },
    password: {
        type: String,
        required: true
    },
    imagenAvatar: {
        type: String,
        required: false,
        trim: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    nacionality: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    biography: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 500,
        trim: true
    }
    // * Agregar campos
})

const User = mongoose.model('users', userSchema)
export {User}