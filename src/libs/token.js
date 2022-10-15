import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const {
    JWT_SECRET
} = process.env


const sign = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '1d'})

const verify = (token) => jwt.verify(token, JWT_SECRET)

export default {
    ...jwt,
    sign,
    verify
}