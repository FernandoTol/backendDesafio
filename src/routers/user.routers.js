import express from "express";
import * as userCases from "../useCase/user.case.js";
import { StatusHttp } from "../libs/httpStatus.js";
import { autoritation } from "../middlewares/autentication.js";



const router = express.Router();

router.get("/", async (request, response, next) => {
    try {
        const { page, limit } = request.query
        const skip = (page - 1) * 10;

        const allUsers = await userCases.getAll().skip(skip).limit(limit)
        response.json({
            succes: true,
            data: {
                user: allUsers,
            },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// *GET /:id

router.get("/:idUser", async (request, response, next) => {
    try {
        const { idUser } = request.params;

        const getUser = await userCases.getById(idUser);

        if (!idUser) {
            throw new StatusHttp("author no encontrado", 401);
        }
        response.json({
            succes: true,
            data: {
                author: getUser,
            },
        });
    } catch (error) {
        next(error)
    }
});


// *POST
router.post("/", async (request, response) => {
    try {
        const newUser = request.body;
        console.log(newUser);
        const userCreated = await userCases.create(newUser);

        console.log(userCreated);
        response.json({
            succes: true,
            message: "user created",
            data: userCreated,
        });
    } catch (error) {
        console.log(error);
        response.json({
            succes: false,
            message: error.message
        });
    }
});

// *Delete
router.delete("/:idUser", autoritation, async (request, response, next) => {
    try {
        const { idUser } = request.params;
        const userDeleted = await userCases.deleteById(idUser);
        console.log(userDeleted);
        if (!userDeleted) {
            throw new StatusHttp("user no encontrado");
        }
        response.json({
            success: true,
            message: 'user deleted',
            data: {
                user: userDeleted,
            },
        });
    } catch (error) {
        next(error)
    }
});

// *Update
router.patch('/:idUser', async (request, response, next) => {
    try {
        const { idUser } = request.params
        const updateUser = request.body

        const userUpdated = await userCases.update(idUser, updateUser)

        if (!updateUser) {
            throw new StatusHttp("author not found");
        }
        response.json({
            succes: true,
            data: {
                user: userUpdated,
            },
        });
    } catch (error) {
        next(error)
    }
});

export default router;