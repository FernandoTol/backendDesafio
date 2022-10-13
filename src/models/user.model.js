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
    }
})

const User = mongoose.model('users', userSchema)
export {User}