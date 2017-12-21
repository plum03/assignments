let viewClicks = document.getElementById("viewClicks");
let button = document.getElementById("btn");

function addToArr(event) {
    
    localStorage.setItem("clicks", JSON.stringify(clicks));

}