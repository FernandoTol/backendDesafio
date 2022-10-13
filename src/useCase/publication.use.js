import { Publication } from "../models/publication.model.js"
//* va .populate
const publicationsAll = () => Publication.find({})

export { publicationsAll }