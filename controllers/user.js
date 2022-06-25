import axios from "axios"
import { response } from "express";
let users = [];

export const createUser = (req, res) => {
    const data = req.body;

    const user = {
        name: data.name,
        pokemons: data.pokemons
    };

    axios
        .post('https://mysterious-shore-05511.herokuapp.com/', user)
        .then(res => { })
        .catch(error => { });

    res.send("Ok");

}

export const getUser = (req, res) => {

    // req.params in dict format

    const user_id = req.params["user_id"];


    const url = 'https://mysterious-shore-05511.herokuapp.com/' + user_id.toString();
    console.log(url)

    axios
        .get(url)
        .then(axios_response => {

            console.log(axios_response.data)

            if (axios_response.data['error']) {
                res.send({ error: 'Query Error' })
            }
            else {
                const user = {
                    "id": axios_response.data['data']['id'],
                    "name": axios_response.data['data']['name'],
                    "pokemons": axios_response.data['data']['pokemons']
                };
                console.log(user)
                res.send(user)
            }

        });

}

export const getUsers = (req, res) => {

    const url = 'https://mysterious-shore-05511.herokuapp.com/'
    console.log(url)

    axios
        .get(url)
        .then(axios_response => {

            console.log(axios_response.data)

            if (axios_response.data['error']) {
                res.send({ error: 'Query Error' })
            }
            else {
                const data = axios_response.data['data']
                console.log(data)
                res.send(data)
            }

        });

}

export const deleteUser = (req, res) => {

    const user_id = req.params["user_id"];

    const url = 'https://mysterious-shore-05511.herokuapp.com/' + user_id.toString();

    console.log(url)

    axios
        .delete(url)
        .then(axios_response => {

            console.log(axios_response.data)

            if (axios_response.data['error']) {
                res.send({ error: 'Query Error' })
            }
            else {
                const data = axios_response.data
                res.send(data)
            }

        });

}


export const updateUser = (req, res) => {

    const user_id = req.params["user_id"];

    const url = 'https://mysterious-shore-05511.herokuapp.com/' + user_id.toString();

    console.log(url)

    const data = req.body

    console.log(data)

    axios
        .patch(url, {
            "name": data.name,
            "pokemons": data.pokemons
        })
        .then(axios_response => {

            console.log(axios_response.data)

            if (axios_response.data['error']) {
                res.send({ error: 'Query Error' })
            }
            else {
                const data = axios_response.data
                res.send(data)
            }

        });

}