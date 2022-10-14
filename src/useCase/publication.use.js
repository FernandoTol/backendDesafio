import { Publication } from "../models/publication.model.js"
//* va .populate
const publicationsAll = () => Publication.find({}).populate('user')

const addPublication = (newPost, userCurrent) => {
    
}

export { publicationsAll }