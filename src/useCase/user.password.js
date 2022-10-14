import { User } from "../models/user.model.js";
import bcrypt from "../libs/bcrypt.js";
import jwt from "../libs/token.js";
const login = async (email, password) => {

    const userFound = await User.findOne({email})

    if(!userFound) throw new Error('Credenciales invalidad')

    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if(!isValidPassword) throw new Error('Credenciales invalidas')

    return jwt.sign({id: userFound._id})
}

export {
    login
}