import jwt from '../libs/token.js'

const autoritation = (request, response, next) => {
    try {
        const {authorization: token } = request.headers

        const isValidToken = jwt.verify(token)
        if(!isValidToken) throw new Error('No autorizado')
        request.auth = tokenDecoded.id
        next()
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            message: ' Denegado  ',
            error: error.message
        })
    }
}

export { autoritation }