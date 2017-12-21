let numbers = [1, 2, 3, 4, 5];

let avg = numbers.reduce(function(total, num) {
    return total + num;
}) / numbers.length;

console.log(avg);

// New ES6 Syntax
// Rest parameter
function addNumbers(...numbers) {

    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

let sum = addNumbers(...numbers);
console.log(sum);

// Rest parameter
function add(...numbers) {
    return numbers.reduce(function(total, num) {
        return total + num;
    });
}
console.log(add(...numbers));


// Spread operator - Combining arrays using ...arrayName
let alpha = ["a", "b", "c"];
let nums = [1, 2, 3];

let mix = ["a", "b", ...nums, "c"]; // => ["a", "b", 1, 2, 3, "c"]

let firstHalf = alpha.slice(0, 3);
let secondHalf = alpha.slice(3);

let splicedArr = [...firstHalf, ...nums, ...secondHalf];

function validateShoppingList(...items) {  
    if (items.indexOf('milk') < 0) { // if milk is not in the array
      return [ 'milk', ...items ]; // add milk to the list, followed by the inputs
    }
  
    return items;
  }
  
  validateShoppingList('oranges', 'bread', 'eggs');  
  // returns ['milk', 'oranges', 'bread', 'eggs']


  // Default Parameters
  function IkeaCouch(color, chaise = "standard") {  //ES6 Syntax for assigning default values
      this.color = color;
      this.modelNo = "rjk29309ud";
      this.chaise = chaise;
      // ES5 syntax for default value
    //   this.chaise = typeof chaise === "undefined" ? "standard" : chaise; 
      // if nothing is selected, given standard by default, otherwise given chaise selection value
  }

  let myNewCouch = new IkeaCouch("chartreuse"); 
  // no value given for chaise, will be given "standard" 
  console.log(myNewCouch);

  // Template Literals
  // ES6 Syntax to combine strings using backticks
  let verb = "code";
  let adverb = "quickly";
  let noun1 = "carrots"; 
  let noun2 = "tea cup";
  let noun3 = "penguin";
  let adjective1 = "bad";
  let adjective2 = "goofy";

  let adlib = `One day, the ${noun1} came upon a ${adjective1} ${noun3}.  I ${adverb} ${verb} the ${adjective2} ${noun2}.`;

  console.log(adlib);

// ES6 Object Literals
  let name = "Justin";
  let age = 36;
  let occupation = "ghost";
  let friends = ["Mona", "Charles"];

  let person = {
    name,
    age,
    occupation,
    friends
  };

  
  // Destructuring - Opposite of Object Literal
const person2 = {
    name2: "Justin",
    age2: 36,
    occupation2: "dancer",
    friends2: ["Clifford", "Mona"]
};

let {name2, age2, occupation2, friends2} = person2;
let[mona] = person2.friends2;

console.log(person2);
console.log(person2.friends2);
console.log(mona);


// ARROW FUNCTIONS - ES6
// anonymous functions

//ES5 - old
let upperCaseEs5 = function(str) {
    return str.toUpperCase();
};

// ES6 - new
let upperCaseEs6 = str => str.toUpperCase();

// Add function - ES5 old way
let addEs5 = function(num1, num2) {
    return num1 + num2;
};

// Add function ES6 new
let addEs6 = (num1, num2) => num1 + num2;


// return array function - ES5 old way
let arrayifyEs5 = function(x,y) {
    return [x,y];
};

// return array ES6 new way
let arrayifyEs6 = (x,y) => [x, y];
console.log(arrayifyEs6(2, "r"));

let doABunchOfStuffEs5 = function(x, y, z) {
    console.log(x);
    let sum = x + y;
    return z - sum;
};

let doABunchOfStuffEs6 = (x, y, z) => {
    console.log(x);
    let sum = x + y;
    return z - sum;
};


// With Arrow Functions, this must be inherited from a constructor function, otherwise this does not apply to arrow functions.
function whatIsThisEs5() {
    return this;
}

let whatIsThisEs6 = () => this; // Returns empty object

console.log(whatIsThis()); // this is the window which is the largest DOM element

function translate() {
    console.log(this.message.toUpperCase() + "!!!!");
}

let Ambassador = function () {
    this.message = "I bring tidings";
    this.translator = {
        message: "I just show up",
        translate: translate
    };
};