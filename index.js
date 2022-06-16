import express from "express";
import bodyParser from "body-parser";

const app = express(); // creates express app
const PORT = 5000; // defines the port of the application

app.use(bodyParser.json()); // defines that we are going to use json data
// in our application

app.get('/', (req, res) => {
    console.log('TEST');

    res.send("Hello from Homepage.");
    
})


const message = `Server running on port: http://localhost:${PORT}`;
app.listen(PORT, () => console.log(message)); // runs app with PORT and
                                              // a function you want to 
                                              // call when it does