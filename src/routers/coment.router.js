import express from 'express'
import * as publicationCase from '../useCase/publication.use.js'
import * as comments from '../useCase/coment.use.js'
import jwt from 'jsonwebtoken'
import { autoritation } from '../middlewares/autentication.js'

const router = express.Router()


router.post( '/:idPublication', autoritation, async ( req, res, next ) => {
    try {
        const idPublication = req.params.idPublication;
        const newComentContent = req.body
        const token = req.headers.authorization
        const {id} = jwt.decode(token)
        const newComent = await comments.create( newComentContent, id,)
        const userUpdated = await publicationCase.createComment( idPublication, idPublication )
        const getComent = await publicationCase.getById(idPublication)
        res.json({
            success: true,
            data: {
                comment: newComent,
                publication: getComent,
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


export default router