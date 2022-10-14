import jwt from 'jsonwebtoken'

const JWT_SECRET = 'ndkd7373fdk#%$#%'

const sign = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '1d'})

const verify = (token) => jwt.verify(token, JWT_SECRET)

export default {
    ...jwt,
    sign,
    verify
}