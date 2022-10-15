import { Publication } from "../models/publication.model.js"

//* va .populate
const publicationsAll = () => Publication.find({}).populate( 'user')

const getById = ( id ) => Publication.findById( id ).populate( 'user' )

const getPostByUserId = ( id ) => Publication.find({ user: id })

const deleteById = ( id ) =>  Publication.findByIdAndDelete( id )

const create = async ( newPost, user ) => {
    const { title, contenido, etiquetas, imagenPortada, date } = newPost
    console.log(user)
    return Publication.create({ user, title, contenido, etiquetas, imagenPortada, date })
}

const update = (id, newUpdate) => Publication.findByIdAndUpdate(id, newUpdate, {new : true})

const createComment = (id ,idComment) => Publication.findByIdAndUpdate(id, { $push: {comment: idComment} }, {new : true})


export { publicationsAll, getById, getPostByUserId, deleteById, create, update, createComment }