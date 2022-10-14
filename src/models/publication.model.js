import mongoose from "mongoose";

const publicationsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
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
    contenido: {
        type: String,
        required: true,
    },
    etiquetas: {
        type: Array,
        required: false
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comentarios' }]
})

const Publication = mongoose.model('publications', publicationsSchema)
export {Publication}