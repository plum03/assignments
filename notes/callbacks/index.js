// Filter Method for Arrays

// Using filter method by defining & calling our own filter function
function filter(arr, testFunc) {
    let output = [];
    for (i = 0; i < arr.length; i++) {
        if(testFunc(arr[i])) {  // can also pass (arr[i], i) if want to test specific index point(s) (e.g. only odd indecies)
            output.push(arr[i]);
        }
        // If whatever function we are testing (placeholder testFunc) returns True, it will push the result to the output array
    }
}

function checkAge(age) {
    return age >= 18;  // Returns either true or false
}

function checkNameLength(name) {
    return name.length <= 5;
}

function oddIndex(item, i) {
    return i % 2 !==0;
}


let ages = [10,12,14,21,55,4,23];
let over18 = filter(ages, checkAge);

console.log(over18);

let contacts = ["Ben", "Michelle", "Brayan", "Matthew", "Erica", "John", "Sam", "Amy"];
let contactsWithShortNames = filter(contacts, checkNameLength);

console.log(contactsWithShortNames);

// Using filter method w/out writing our own filter() function:
let ornaments = ["star", "angel", "plumbus", "snowmen", "candycane", "wisemen", "penguin"];

let filteredOrnamentsP = ornaments.filter(ornamentP);
let filteredOrnamentsA = ornaments.filter(ornamentA);

function ornamentP (ornament) {
    return ornament[0] === "p";
}

function ornamentA (ornament) {
    return ornament.match(/^a/g);
}

console.log(ornaments.filter(ornamentP));
console.log(ornaments.filter(ornamentA));






