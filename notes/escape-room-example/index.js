// First: npm init, npm install --save readline-sync
// Then create variable to require readline-sync
const rs = require("readline-sync");

console.log("You wake up in a locked room. \nThere is a door, a hidden key and a hole in the wall.");

// Keep track of necessary info
let inventory = [];
let isAlive = true;

while(isAlive) { // While loop will keep running while alive and keep returning the prompt
    // Give prompt
    let userInput = rs.question("What would you like to do?");
    // Clean user input first
    userInput = userInput.toLowerCase();

    if (userInput.includes("hole") && userInput.includes("put")) {
        isAlive = false;
        console.log("THE CAKE IS A LIE");
    } else if (userInput.includes("open") && userinput.includes("door")) {
        if (inventory.includes("key")) {
            console.log("You have escaped, and just in time - you were running out of air");
            break; // Game is over, break out of loop
        } else {
            console.log("The door is locked.");
        }
    } else if (userInput.includes("take") && userInput.includes("key")) {
        console.log("You found a key, but is it the key?");
        inventory.push("key");
    } else if (userInput.includes("look")) {
        console.log("You are in a locked room. \nThere is a door, a hidden key and a hole in the wall.");
    } else {
        console.log("HAHAHA fail. Try again.");
    }
}




// look -> will print a description of room
// open door -> if you have key go out, if not you fail **DONE**
// put hand in hole -> YOU ARE DEAD (Game Over) **DONE**
// take key -> put key in door **DONE**
// Error handling: what if they type in something wrong