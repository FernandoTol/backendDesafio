import { Publication } from "../models/publication.model.js"
//* va .populate
const publicationsAll = () => Publication.find({}).populate( 'user ')

const getById = ( id ) => Publication.findById( id ).populate( 'user' )

const getPostByUserId = ( id ) => Publication.find({ user: id })

const deleteById = ( id ) =>  Publication.findByIdAndDelete( id )

const create = async ( newPost, user ) => {
    const { title, contenido, etiquetas, imagenPortada, date } = newPost
    return Publication.create({ title, contenido, etiquetas, imagenPortada, date, user })
}


export { publicationsAll, getById, getPostByUserId, deleteById, create }