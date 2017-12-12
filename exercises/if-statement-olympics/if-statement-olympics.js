// Preliminaries
// 1.
if(5 > 3) {
    console.log("is greater than");
}

// 2.
var cat = "cat";

if(cat.length == 3) {
    console.log("is the length");
}

// 3.
if ("cat" == "dog") {
    console.log("wtf?!?")
}
else {
    console.log("not the same");
}

console.log("You made it to the next round.")

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}
// 1.
if (person.age >= 18) {
    console.log("Good to go")
}
else {
    console.log("Restricted: Grow up")
}

// 2.
if (person.name.startsWith("B")) {
    console.log("Okay to enter")
}
else {
    console.log("You may leave now")
}

// 3.
if (person.age >= 18 && person.name.startsWith("B")) {
    console.log("Let them in")
}
else {
    console.log("GTFO!")
}




// Gold Medal
// 5.
var z = "booze";
var p = "p";
var c = "c";

if (z.charCodeAt(z.indexOf("o")) > 20) {
    console.log("is greater");
}
else {
    console.log("is less")
}


