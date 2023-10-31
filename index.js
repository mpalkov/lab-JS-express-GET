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

const btnElement = document.querySelector("#btn");

btnElement.addEventListener('click', populateCharacters);

console.log("JS running");

const ulElement = document.querySelector("#the-list");

const fillList = (list) => {
    for (i = 0; i < list.length; i++) {
        const newItem = document.createElement("li");
        newItem.innerHTML = `<h3>${list[i].name}</h3><img src="${list[i].image}" alt="${list[i].name}">`;
        ulElement.appendChild(newItem);
        console.log("appending ", newItem);
    }
}

async function populateCharacters() {
    try {   
        const response = await fetch("http://localhost:3000");
        const characterList = await response.json();
        console.log(characterList);
        fillList(characterList);
        console.log("Fetch done");
    }
    catch (error) {
        console.log("ERROR: ", error);
    }
}