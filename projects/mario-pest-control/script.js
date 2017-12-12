// pricing

var goombaPrice = 5;
var bobombPrice = 7;
var cheepCheepPrice = 11;

// quantities --> Change to input box that will take input from user

var goombaQty = document.getElementById("goombaQty");
var bobombQty = document.getElementById("bobombQty");
var cheepCheepQty = document.getElementById("cheepCheepQty");

// subtotals
var bobombSubtotal =  0;
var cheepSubtotal =  0;
var goombaSubtotal =  0;


var cheepCheepSubtotal = cheepCheepPrice * Number(cheepCheepQty.value)

var goombaSubtotal =  goombaPrice * Number(goombaQty.value)

// submit buttons
function addTotal(){
    document.getElementById("grandTotal").innerHTML = 
    "Grand Total: " + (bobombSubtotal + cheepCheepSubtotal + goombaSubtotal)
}

bobombCalc.onclick = function() {
    bobombSubtotal = bobombPrice * Number(bobombQty.value);
    document.getElementById("bobombSubtotal").innerHTML = "Bob-omb Subtotal: " +bobombSubtotal;
    addTotal();
    
   
    // clearInputs()
}

goombaCalc.onclick = function() {
    goombaSubtotal = goombaPrice * Number(goombaQty.value)
    document.getElementById("goombaSubtotal").innerHTML = "Goomba Subtotal: " +goombaSubtotal
    addTotal();
   

    // clearInputs()
}

cheepCheepCalc.onclick = function() {
    cheepCheepSubtotal = cheepCheepPrice * Number(cheepCheepQty.value)
    document.getElementById("cheepCheepSubtotal").innerHTML = "Cheep Cheep Subtotal: " +cheepCheepSubtotal
    addTotal();
    
    
    // clearInputs()
}
//arithemetic and DOM

document.getElementById("bobombPrice").innerHTML = "Price per each: " + bobombPrice
document.getElementById("bobombQty").innerHTML = "# caught: " + bobombQty


document.getElementById("goombaPrice").innerHTML = "Price per each: " + goombaPrice
document.getElementById("goombaQty").innerHTML = "# caught: " + goombaQty


document.getElementById("cheepCheepPrice").innerHTML = "Price per each: " + cheepCheepPrice
document.getElementById("cheepCheepQty").innerHTML = "# caught: " + cheepCheepQty

document.getElementById("grandTotal").innerHTML = "Grand Total:" + ((cheepCheepPrice * Number(cheepCheepQty.value)) + (goombaPrice * Number(goombaQty.value)) + (bobombPrice * Number(bobombQty.value)))


// var clearInputs = function() {
//     document.getElementById("grandTotal").innerHTML = "Grand Total:" + grandTotal
//     bobombQty.value = ""
//     goombaQty.value  = ""
//     cheepCheepQty.value  = ""
// }
