// BATTLESHIP GAME GUIDE
// Step 1: You need a grid
// Step 2: location object that contains info about a particular coordinate
// Step 3: Game loop

let rs = require("readline-sync");

function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0; // returns true if num = 0, which has a 1:10 chance of happening.
}

function Location() {
    // want chance of isShip=true to be 1:10, write separate function
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~";
}
function Grid() {
    this.grid = [];
    this.totalShips = 0; // initialize the total as zero, the genGrid will randomly generate ships when called and the gameLoop function will check to see if totalShips===0 ->GAME OVER
}

Grid.prototype.genGrid = function() {
    for(let i = 0; i < 8; i++) {
        this.grid.push([]); // to create rows on grid, push empty array -- creates 8 empty rows
        for(let j=0; j<8; j++) {
            let location = new Location(); // calls Location() constructor
            if(location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location); // creates 
        }
    }
};

Grid.prototype.displayGrid = function() {
    // print the grid to the screen
    // you need 2 for-loops to display grid
    for (let i=0; i<this.grid.length; i++) {
        let row = [];
        for (let j=0; j< this.grid[i].length; j++) {
            row.push(this.grid[i][j].display); // pushes to specific i,j coordinate of grid
        }
        console.log(row.join(" ")); // converts array to string
    }
};

Grid.prototype.attack = function (x, y) {
    let coord = this.grid[y][x]; // equals grid[i][j]
    coord.isHit = true;
    if(coord.isShip) {
        coord.display = "x";
        this.totalShips --;
    } else {
        coord.display = "o";
    }
};

// Gameplay Loop

let game = new Grid();
game.genGrid();
console.log("Welcome to Battleship!!");
game.displayGrid();
let turnCouter = 20;
while(true) {
    let xLimit = game.grid.length -1;
    let yLimit = game.grid[0].length -1;
    let x = rs.keyIn("Choose an X coordinate between 0 and " + xLimit+ "\n", {limit: "$<0-" +xLimit+ ">"});
    let y = rs.keyIn("Choose a Y coordinate between 0 and " + yLimit+ "\n", {limit: "$<0-" +yLimit+ ">"});
    if(!validateCoord(x,y)) {
        console.log("Invalid input.");
        continue;
    }
    if(!validateAttack(x,y)) {
        console.log("\nSorry you already attacked that location!\n");
        continue;
    }
    game.attack(x,y);
    game.turnCounter --;
    if(turnCouter===0) {
        break;
    }
    if(game.totalShips === 0) {
        console.log("You've sunk all the ships.  YOU WIN!!");
        break;
    }
    game.displayGrid();
}
if (turnCounter > 0) {
    console.log("VICTORY!!");
} else {
    console.log("DEFEATED. YOU SUCK");
}

// GAME LOOP HELPER FUNCTIONS
function validateCoord(x, y) {
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length;
}

function validateAttack(x, y) {
    x = Number(x);
    y = Number(y);
    return !game.grid[y][x].isHit;
}


// when the game starts, show a brand new grid
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["~", "~", "~"]
// ]

// asks you to enter in an x and y coordinate
// show the grid aain but this time it dispalays the rtesul of your attack
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["0", "~", "~"]
// ]
// above process repeats until all ships are dead

// print ... console

