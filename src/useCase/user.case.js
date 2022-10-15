import {User} from '../models/user.model.js'
import bcrypt from '../libs/bcrypt.js'

const getAll = () => User.find({})

const create = async (newUser) => {
    // modificar
    const { correo, password, nombre, initialDate, nacionality } = newUser

    const UserFound = await User.findOne({correo})

    if(UserFound) throw new Error('This User already exist!')

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return User.create( {...newUser, password: encryptedPassword} )
}

const update = (idUser, updatedUser) => User.findByIdAndUpdate(idUser, updatedUser, {new:true})

const getById = (idUser) => User.findById(idUser)

const deleteById = (idUser) => User.findByIdAndDelete(idUser)


export {
    getAll,
    create,
    update,
    deleteById,
    getById
}