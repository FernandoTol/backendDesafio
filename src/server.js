import express from 'express'
import routerpb from './routers/publications.router.js'

const server = express()

// Routers
server.use('/publications', routerpb)


export {server}