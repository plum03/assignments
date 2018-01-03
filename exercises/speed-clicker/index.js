
// create click-counter variable
// display clicks in browser
// event listener for click buttons

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("counter");


let clickCounter = localStorage.getItem("number") || 0;
counter.innerHTML = clickCounter;

plus.onclick = () => {
    clickCounter++;
    localStorage.setItem("number", clickCounter);
    counter.innerHTML = clickCounter;
};

minus.onclick = () => {
    clickCounter --;
    localStorage.setItem("number", clickCounter);
    counter.innerHTML = clickCounter;
};

// Use parse and stringify when you need to store more than just a number...

// let viewClicks = document.getElementById("viewClicks");
// let button = document.getElementById("btn");

// function addToArr(event) {
    
//     localStorage.setItem("clicks", JSON.stringify(clicks));

// }