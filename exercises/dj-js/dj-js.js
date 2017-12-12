var box = document.getElementById("box");

box.onmousedown = function() {
        box.style.backgroundColor = "lightcoral";
}
box.onmouseup = function() {
    box.style.backgroundColor = "gold";
}
box.onhover = function() {
    box.style.backgroundColor = "skyblue";
}
box.ondblclick = function() {
    box.style.backgroundColor = "lime";
}

window.onscroll = function() {
    box.style.backgroundColor = "orange";
}

window.onkeyup = function(event) {
    console.log(event)

    switch(event.key) {
        
        case "b":
            box.style.backgroundColor = "skyblue";
            box.style.border = "skyblue";
            break;
        case "r":
            box.style.backgroundColor = "lightcoral";
            box.style.border = "lightcoral";
            break;
        case "o":
            box.style.backgroundColor = "orange";
            box.style.border = "orange";
            break;
        case "g":
            box.style.backgroundColor = "lime";
            box.style.border = "lime";
            break;
            case "y":
            box.style.backgroundColor = "gold";
            box.style.border = "gold";
            break;
    }
}



  // if(event.key === "y") {
    //     box.style.backgroundColor = "yellow";
    // }
    // else if (event.key === "b") {
    //     box.style.backgroundColor = "blue"
    // }

