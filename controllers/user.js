import { v4 as uuidv4 } from "uuid"

let users = [];

export const createUser = (req, res) => {

    const user_id = uuidv4(); // id will never be equal to other user
    const data = req.body;

    const user = {
        id: user_id,
        name: data.name,
        nickname: data.nickname
    };

    users.push(user);

    res.send("Ok");

}

export const getUser = (req, res) => {

    // req.params in dict format

    const user = users.find(user => user.id == req.params["user_id"]);

    // .find method returns undefined if nothing has been found
    if (user == undefined) {
        res.send("User not Found");
    }
    else {
        res.send(user);
    }

}

export const getUsers = (req, res) => {

    res.send(users);

}

export const deleteUser = (req, res) => {

    // remove the elements that returned false in the function 
    if (users.find(user => user.id == req.params['user_id']) != undefined) {
        users = users.filter(user => user.id != req.params['user_id']);
        res.send(`User ${req.params['user_id']} deleted from users`);
    }

    else {
        res.send(`User ${req.params['user_id']} not found`);
    }

}

export const updateUser = (req, res) => {

    let user = users.find(user => user.id == req.params['user_id']);

    if (user == undefined) {
        res.send(`User ${req.params['user_id']} not found`);
    }
    else {
        let { id, name, nickname } = req.body

        if (id) res.send("Can't modify user Id");
        else {
            if (name) user.name = name;
            if (nickname) user.nickname = nickname;
            res.send(`User with the id ${req.params['user_id']} has been updated`);
        }

    }

}