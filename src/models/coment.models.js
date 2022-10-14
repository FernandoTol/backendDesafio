import mongoose from "mongoose";

const comentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    comentario: {
        type: String,
        required: true,
        trim: true,
    },
    likes: {
        type: Number,
        required: true,
        trim: true,
    }
})

const Comentarios = mongoose.model('comentarios', comentSchema)
export {Comentarios}