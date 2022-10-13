import mongoose from "mongoose";

const publicationsSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    imagenPortada: {
        type: String,
        required: true,
        trim: true
    },
    imagenAvatar: {
        type: String,
        required: true,
        trim: true
    },
    contenido: {
        type: String,
        required: true,
    },
    etiquetas: {
        type: Array,
        required: false
    },
    comentarios: {
        type: Array,
        required: false
    }
})

const Publication = mongoose.model('publications', publicationsSchema)
export {Publication}