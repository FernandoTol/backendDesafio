import express from 'express'
import * as publication from '../useCase/publication.use.js'
import * as comentUseCase from '../useCase/coment.use.js'
import { autoritation } from '../middlewares/autentication.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/', async ( req, res, next ) => {

    try {
        const allpub = await publication.publicationsAll()
        console.log( allpub )
        res.json({
            succes: true,
            data: {
                publications: allpub
            }
        })
    } catch ( err ) {
        res.status( 400 )
        res.json({
            succes: false,
            message: err.message
        })
    }

})

router.get('/writer/:idUser', async ( req, res ) => {
    try{
        const { idUser } = req.params
        console.log( idUser )
        const user = await publication.getPostByUserId( idUser )

        res.json({
            success: true,
            data: {
                users: user
            }
        })
    } catch ( err ) {
        res.status( 400 ).json({
            success: false,
            message: err.message
        })
    }
})


router.post('/', autoritation,async ( req, res, next ) => {
    try{
        const { body: newPostContent } = req
        const token = req.headers.autoritationorization
        const { id } = jwt.decode( token )
        console.log( id )
        const newPost = await publication.create( newPostContent,id )

        res.json({
            success: true,
            data: {
                post: newPost
            }
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
})

router.delete( '/:idPost',autoritation, async ( req, res )=>{
    try{
        const { idPost } = req.params
        const userDeleted = await publication.deleteById( idPost )
        const commentsDeleted = await comentUseCase.deletePostComments( idPost )
        res.status( 200 ).json({
            success: true,
            card: userDeleted,
            comments: commentsDeleted,
            message: "card Deleted!"
        })
    } catch (err){
        res.status( 400 ).json({
            success: false,
            message: err.message
        })
    }
})

router.patch( '/:idPost',auth, async ( req, res )=>{
    try{
        const updateUser = req.body
        const { idPost } = req.params
        const userUpdated = await publication.update( idPost, updateUser )
        res.status( 200 ).json({
            success: true,
            card: userUpdated,
            message: "card Updated!"
        })
    } catch ( err ){
        res.status( 400 ).json({
            success: false,
            message: err.message
        })
    }
})

export default router