import express from 'express'
import * as publicationCase from '../useCase/coment.use.js'
import * as userCase from '../useCase/publication.use.js'
import { StatusHttp } from '../middlewares/errorServer.js'
import jwt from 'jsonwebtoken'
import { autoritation } from '../middlewares/autentication.js'

const router = express.Router()

router.get( '/:idPost', async ( req, res ) => {
    try {
        const { idPost } = req.params
        const allComents = await publicationCase.getById( idPost )
        res.json({
            success: true,
            data: {
                comment: allComents
            },
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.get('/', async ( req, res ) => {
    try {

        const { idUser, idPost } = req.query
        let allComents = '';
        if ( idUser ) {
            allComents = await publicationCase.getByUser( idUser )
        } else if ( idPost ) {
            allComents = await publicationCase.getByPost( idPost )
        }
        else {
            throw new StatusHttp( 'neither an user nor a post are declare!', 404 )
        }

        if ( !allComents ) {
            console.log( 'no comments found' )
            throw new StatusHttp( 'no comments found!', 404 )
        }
        res.json({
            success: true,
            data: {
                comment: allComents
            },
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.post( '/post/:idPublication', autoritation, async ( req, res, next ) => {
    try {
        const idPublication = req.params.idPublication;
        const newComentContent = req.body
        const token = req.headers.autoritationorization
        const { id } = jwt.decode( token )
        const newComent = await publicationCase.create( newComentContent, id, idPublication )
        const userUpdated = await userCase.createComment( newComent.user, newComent.id )
        res.json({
            success: true,
            data: {
                comment: newComent
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.patch('/:idComent', async ( req, res ) => {
    try {
        const { idComent } = req.params
        const Coment = req.body
        const updatedComent = await publicationCase.update( idComent, Coment )
        res.json({
            success: true,
            data: {
                comment: updatedComent
            },
        })
    } catch ( error ) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.delete( '/:idComent', autoritation, async ( req, res ) => {
    try {
        const { idComent } = req.params
        const comentDeleted = await publicationCase.deleteById( idComent )
        const userId = comentDeleted.user.toString()
        const userUpdated = await userCase.deleteComment( userId, comentDeleted.id )
        res.json({
            success: true,
            data: {
                comment: comentDeleted
            },
            user: {
                user: userUpdated
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