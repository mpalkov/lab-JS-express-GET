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
const JSONFILE = `{
    [
        {
            "name": "Rick Sanchez",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        {
            "name": "Morty Smith",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            "name": "Summer Smith",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        }
    ]}`;

const express = require("express");

const server = express();

server.get("/", (request, response) => {
    response.send(JSONFILE);
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});