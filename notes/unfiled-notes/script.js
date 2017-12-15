//nodconsole.log(document.getElementById("test"))


// // Creating JS Object
// var alex = {
//     name: "alex",
//     height: 1.84,
//     likesVSchool: true,
//     siblings: ["Terry", "Steve", "Karen"],
//     computer: {
//         brand: "Apple",
//         type: "Laptop",
//         year: 2018
//     }
// }
// var samantha = {
//     name: "Samantha",
//     height: 1.84,
//     likesVSchool: true,
//     siblings: ["Emily", "Josh"],
//     computer: {
//         brand: "Apple",
//         type: "Laptop",
//         year: 2016
//     }
// }

// // Accessing Object elements
// console.log(alex.height);
// console.log(alex.computer.brand);

// // Accessing array values
// let animals = ["dog", "cat", "fish"];
// console.log(animals[2]);

// // Functions
// var getalexsName = function() {
//     return alex.name;
// }
// getalexsName(); // calls function

// // Using Parameters in functions
// var getHeight = function(person) {
//     return person.height;
// }
// console.log(getHeight(samantha));
// // must pass function a parameter when called since a parameter was defined for the function


// //Using node in the terminal to display
// console.log("Hi Erica!");
// // open terminal; navigate to dir; type "node fileName.type" to execute

// // Arrays

// let arr = [
//     "cat",
//     100,
//     function() {
//         return "is a function"
//     },
//     true ];

//     console.log(arr[1]); // to send 100 to the console
//     console.log(arr[2]()); //must add () after arr[2] to call the function
//     // same construct as console.log(function()) -- "arr[2]" in this case serves as the function name
//     console.log(arr.length);


// /* 
// let jonh = {
//     speak:function() {
//         console.log("I am awesome!");
//     }
// }
// speak() */

// //Methods

// // Adding elements to array
// let necklace = [];

// necklace.push("clear bead"); // adds element to the end of the array
// necklace.push("purple bead");
// necklace.push("red bead");
// necklace.unshift("seaform green bead"); // adds element to the start of the array
// necklace.unshift("chartreuse bead");
// //Splicing elements from an array
// // .splice(startIndex, numToRemove[items to Insert])
// necklace.splice(2,1) // removes 1 element beginning @ index 2 (clear bead)

// console.log(necklace); // to see necklace in node

// for(i=0; i < necklace.length; i++) {
//     console.log(necklace[i]);
// }

// necklace.push("clear bead", "purple bead", "yellow bead", "seafoam green");

// let newNecklace= [necklace.splice(0,3)]; //modifies the necklace array and creates a new array 
// console.log(newNecklace); 

// // Objects

// // Pass by reference
// var sam = {
//     name: "Sam",
//     age: 30
// }

// // new decorator = sam;

// // Conditionals
// if(sam.age < 31){
//     console.log("Looking good!")
// }
// else if(31 < sam.age < 70){
//     console.log("Still lookin good!")
// }
// else {
//     console.log("dead")
// }

// // if(samantha.name < tyler.name) {
// //     console.log
// // }

// //Ternary Operator
// console.log(sam.age ==0 ? "looking good" : "lookin good still")
// // if sam's age = 0 print 1st statement if true, 2nd statement prints
// // genrally use If statements over ternarys


// // Switch Statement
// var today = "Monday";

// // Must include break statements if you do not want to continue on to following conditions
// switch(today) {
//     case "Sunday":
//         console.log("Wake up at 2pm!");
//         break;
//     case "Monday":
//         console.log("Wake up at 8am");
//         break;        
//     case "Tuesday":
//         console.log("Wake up at 8am");
//         break;        
//     case "Wednesday":
//         console.log("Wake up at 8am");
//         break;        
//     case "Thursday":
//         console.log("Wake up at 8am");
//         break;        
//     case "Friday":
//         console.log("Wake up at 8am");
//         break;        
//     case "Saturday":
//         console.log("Wake up at 10am");
//         break;
//     default:
//         console.log("Invalid Day")        
// }

// // Function to convert (display) numberical value to text
// var number = 1;

// function convertNum(number) {
//     switch (number) {
//         case 0:
//             return "zero"
//         case 1:
//             return "one"
//         case 2:
//             return "two"
//         case 3:
//             return "three"
//         case 4:
//             return "four"
//         case 5:
//             return "five"
//         case 6:
//             return "six"
//         default: 
//             return "Invalid number.  Only numbers 0-6 are allowed."
//     }
// }
// console.log(convertNum(3)); 

// // .charCodeAt() Method
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabet.charCodeAt(4)); //returns ASCII of e (char at index [4])
// console.log(String.fromCharCode(9));


// // Nested Array (Grid)
// var grid = [];
// grid.push([]);

// console.log(grid);

// var grid = [
//     [0, 0, 0, 0], //Outside: Row at index[0]; Inside: indexed values from 0-3
//     [0, 0, 0, 0], 
//     [0, 7, 0, 0],
//     [0, 0, 0, 0]
// ];
// console.log(grid[2][1])  // returns value 7 (Row 2, Index[1])

// // Nested For Loops
// var grid1 = [];

// for(i=0; i < 3; i++) { // pushing 3 arrays into grid1[]
//     grid1.push([]); 

//     for(j=0; j<3; j++) {
//         grid1[i].push(j);

//     }
// }

// console.log(grid1);

// var grid2 = [];

// for(i=0; i < 3; i++) { // pushing 3 arrays into grid1[]
//     grid2.push([]); 

//     for(j=0; j<3; j++) {
//         grid2[i].push(i);

//     }
// }

// console.log(grid2);

// // Functions
// var person = {
//     name: "Pat",
//     age: 20,
//     log: function (){
//         // logs stuff
//     }
// }

// // var name = function () {
// //     console.log("a name");

// //     return name()
// // }

// var furbieArray = ["furbie", "sleepy furbie", "goth furbie", "creepy furbie", "sexy furbie"];

// furbieArray.splice(3,1) // cuts creepy furbie from list
// console.log(arr.splice(3.1)) //returns "creepy furbie" as a new array

// var sleepy = furbieArray.slice(1,2)  // stores "sleepy furbie" in var sleepy
// console.log(furbieArray.slice(1,2)); // returns "sleepy furbie" w/out removing from original array

// // Parameters & Arguments

// // var name = function (aName) {
// //     console.log(aName)
// // }

// // name("Jami");
// // name("Jon");


// var names = function (name1, name2)  {  // parameter order is static. must keep arguments in the same order
//     console.log("Hi my name is Jameson, but you can call me " + name1+ ".");
//     console.log("Hi my name is Jonathan, but you can call me " + name2+ ".");
// }

// names("James", "Jon");

// // Parameters are like new, undefined parameters.  Therefore, params should not have the same name as existing variables

// // If parameters are not defined in a function, you cannot pass arguments into them

// // STRING METHODS
// var dresser = {
//     topDrawer: "keyswalletpassport",
//     midDrawer: "magazineducttape",
//     bottomDrawer: "jeans onesie gumwrapper"
// }
// console.log(dresser.topDrawer.indexOf("keys")) // returns index starting point of string

// // .concat to combine 
// console.log(dresser.topDrawer.concat(dresser.midDrawer));

// // .slice to remove part of the string
// // .slice(start index, end index (up to & excluding)) or just start index if you want
// console.log(dresser.topDrawer.slice(4, 10)) 

// // .split
// console.log(dresser.bottomDrawer.split(" "));

// // .match

// var name = "Ben";
// name.match(/Ben/);

// function matchRegex(stringInput,pattern) {
//     return stringInput.match(pattern)
// }

// console.log(matchRegex("Ben",name)); // returns [ 'Ben', index: 0, input: 'Ben' ]]
// console.log(matchRegex("ben",name)); // returns null -- lowercase does not match

// // FUNCTION - REVIEW
// var name = function() {
//     return "Hiya Buddy!"
// }
// // console.log(name());

// // var buddy = name();  //if you add () you are assigning the return to the var buddy.  If you just set buddy equal to name w/out the (), you are just reassigning the 
// // console.log(buddy);

// var goat = function() {
//     console.log("i am mr. goat")
// }

// var name = function() {
//     var age = function() {
//         console.log("My age is 12")       
//         }
//     return goat() + age();
// }


// // Variable Scope & Nested functions
// var country = function() {
//     var president = "Pat";
//     var state = function() {
//         var governor = "Celeste"
//         var city = function() {
//             var mayor = "Tyler"
       
//             console.log("President: " + president);
//             console.log("Governor: " + governor);
//             console.log("Mayor: " + mayor);
//         }
//         city(); 
//         console.log(president);       
//     }
//     state();
//     console.log(president);  //will work bc var president was defined on same scope as state()
// }
// country();
// // console.log(president);  Will throw error bc var president defined w/in country() - Does not exist outside of it


// var unpack = function(box) {
//     return box.contents
// }

// var boxOClothes = {
//     contents: ["socks", "spider costumer", "lint", "spider"],
//     belongsTo: "Erica"
// }

// var dresserContents = unpack(boxOClothes);

// // DOM - DOCUMENT OBJECT MODEL

// console.log(window)

// var input = document.getElementById("input");
// var button = document.getElementById("submit");
// var list = document.getElementById("display");

// input.onfocus = function() {
//     input.style.backgroundColor = "yellow";
// }

// submit.onclick = function(event) {
//     console.log(event)
//     var inputText = input.value;  //gives the value the input submitted into the form field associated w/ the submit button.
//     var li = document.createElement("li");
//     var txtNode = document.createTextNode(inputText);
//     li.appendChild(txtNode);
//     display.appendChild(li);
// }

// Form Handling -- Only Accept Numbers in input

// var convertedFromString = Number(input.value); // convert text input into Number
// if(isNaN(convertedFromString)) {
//     alert("This is bullshit")
// } else {
//     alert("here is your number: " + convertedFromString)
// }

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = document.getElementById("add");
var output = document.getElementById("output");

add.onclick = function() {
   var firstNum = Number(num1.value);
   var secondNum = Number(num2.value);
   
   output.innerHTML = firstNum + secondNum;

   clearInputs()
}

function clearInputs() {
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";

}