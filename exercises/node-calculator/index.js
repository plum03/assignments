var rs = require("readline-sync");

var firstNum = rs.question("What is your first number?");
var secondNum = rs.question("What is your second number");

function sum(num1,num2) {
    return Number(num1) + Number(num2);
}

console.log(sum(firstNum, secondNum));

