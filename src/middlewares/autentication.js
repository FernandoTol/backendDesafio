import jwt from '../libs/token.js'
import errors from './errorServer.js'

const autoritation = (request, response, next) => {
    try {
        const {authorization: token } = request.headers

        const isValidToken = jwt.verify(token)
        if(!isValidToken) throw new Error('No autorizado')
        request.auth = isValidToken.id
        next()
    } catch (error) {
        response.errors(401)
        response.json({
            success: false,
            message: ' Denegado  ',
            error: error.message
        })
    }
}

export { autoritation }