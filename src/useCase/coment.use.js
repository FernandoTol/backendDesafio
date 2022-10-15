import { Coment } from '../models/coment.models.js'

const getAll = () => Coment.find({})

const getById = ( id ) => Coment.findById( id )

const getByUser = ( id ) => Coment.find({ author: id })

const create = async ( newComent, author ) => {
    const { comentario, likes } = newComent
    return Coment.create({ comentario, likes, author })
}

const update = ( id, newComent ) => Coment.findByIdAndUpdate( id, newComent, {new : true} )

const deleteById = ( id ) => Coment.findByIdAndDelete( id )

export { create, getAll, getById, getByUser, update, deleteById }