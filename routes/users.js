import express from "express";

// import functions from controllers

import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/user.js";

const router = express.Router();

// all routes in here starts with /users

// get routes  **********************************************

router.get("/", getUsers);

router.get("/:user_id", getUser);

// post routes ***********************************************

router.post("/", createUser);

// delete routes ***********************************************

router.delete("/:user_id", deleteUser);

// patch routes *************************************************

router.patch("/:user_id", updateUser);

export default router;