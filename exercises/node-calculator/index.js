var rs = require("readline-sync");

var firstNum = rs.question("What is your first number?");
var secondNum = rs.question("What is your second number");

function sum(num1,num2) {
    return Number(num1) + Number(num2);
}

function sub(num1,num2) {
    return Number(num1) - Number(num2);
}

function mul(num1,num2) {
    return Number(num1) * Number(num2)
}

function div(num1,num2) {
    return Number(num1) / Number(num2)
}

var operations = ["add", "subtract", "multiply", "divide"];

var operation = rs.keyInSelect(operations, "\nWhich operation would you like to perform with these numbers?" );

console.log("The result of your calculation is: " +calculate())

function calculate() {
    if (operation === 0) {
        return sum(firstNum,secondNum)
    } else if (operation === 1) {
        return sub(firstNum,secondNum)
    } else if (operation === 2) {
        return mul(firstNum,secondNum) 
    } else if (operation === 3) {
        return div(firstNum,secondNum)
    } else {return "Game Over.  Bye."}
}

