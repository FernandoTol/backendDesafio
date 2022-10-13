import { Publication } from "../models/publication.model.js"

const publicationsAll = () => Publication.find({})

export { publicationsAll }