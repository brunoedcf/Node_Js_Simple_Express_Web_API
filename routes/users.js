import express from "express";
import { v4 as uuidv4 } from "uuid"

const router = express.Router();

const users = [
    {
        id: uuidv4(),
        name: "Bruno Esteves",
        nickname: "Brest"
    },
    {
        id: uuidv4(),
        name: "Maria Eduarda",
        nickname: "dudah89"
    }

];

// all routes in here starts with /users
router.get("/", (req, res) => {

    res.send(users);

});

router.get("/:user_id", (req, res) => {

    // req.params in dict format

    const user = users.filter(user => user.id == req.params["user_id"]);

    res.send(user);

});

router.post("/", (req, res) => {

    const user_id = uuidv4();
    const data = req.body;

    const user = {
        id: user_id,
        name: data.name,
        nickname: data.nickname
    };

    users.push(user);

    res.send("Ok");

});

export default router;