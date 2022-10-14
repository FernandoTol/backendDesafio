import {Coment} from '../models/coment.models.js'

const getAll = () => Coment.find({})

const getById = ( id ) => Coment.findById( id )

const getByUser = ( id ) => Coment.find({ author: id})

const create = (newComment,author,card) => {
    const {comentario,likes} = newComment
    return Coment.create({comentario,likes,author,card})
}

const update = (id, newComment) => Coment.findByIdAndUpdate(id, newComment, {new : true})

const deleteById = (id) => Coment.findByIdAndDelete(id)

export {
    create,
    getAll,
    getById,
    getByUser,
    update,
    deleteById
}