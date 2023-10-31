// ------- CREATE A JS SERVER  ------- \\

// USE EXPRESS 

// npm init

// npm install express

// This server is going to give us information in a JSON file. 
// When I make a GET request to the server I get back a JSON.
// This JSON FILE contains an array of users or characters (10) and images

// ------- CREATE AN HTML  ------- \\

// This HTML is going to have a UL
// and with another JS file you need to make a request to your server and get the data back

// BONUS:: ADD CSS and super fancy styling
const DATA = `[
    {
        "name": "Rick Sanchez",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "name": "Morty Smith",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "name": "Summer Smith",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        "name": "Beth Smith",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "name": "Jerry Smith",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
        "name": "Abadango Cluster Princess",
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
    },
    {
        "name": "Abradolf Lincler",
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    },
    {
        "name": "Adjudicator Rick",
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
    },
    {
        "name": "Agency Director",
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
    },
    {
        "name": "lan Rails",
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
    }
]`;

//const jsonFile = DATA.stringify();

console.log("index.js OK");

//middleware
const cors = require('cors');
const express = require("express");
const server = express();
server.use(cors());

server.get("/", (request, response) => {
    response.send(DATA);
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});