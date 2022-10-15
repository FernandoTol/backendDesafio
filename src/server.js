import express from 'express';
import cors from 'cors'

import routerpb from './routers/publications.router.js';
import routerUser from './routers/user.routers.js';
import errors from "./middlewares/errorServer.js";
import routerPass from './routers/password.router.js';
import routercoment from './routers/coment.router.js';

const server = express();
server.use(cors())
server.use( express.json() )


// Routers
server.use('/publications', routerpb);
server.use("/user", routerUser);
server.use("/pass", routerPass);
server.use("/coment", routercoment);





export {server};