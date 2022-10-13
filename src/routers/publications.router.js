import express from 'express'
import { publicationsAll } from '../useCase/publication.use.js'

const router = express.Router()

router.get( '/', async ( req, res, next ) => {

    try {
        const allpub = await publicationsAll()
        console.log(allpub)
        res.json({
            succes: true,
            data: {
                publications: allpub
            }
        })
    } catch (err) {
        res.status(400)
        res.json({
            succes: false,
            message: err.message
        })
    }

})

export default router