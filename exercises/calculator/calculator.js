var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");

var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");

var outputA = document.getElementById("outputA");
var outputS = document.getElementById("outputS");
var outputM = document.getElementById("outputM");

add.onclick = function() {
    var firstNum = Number(num1.value);
    var secondNum = Number(num2.value);

    outputA.innerHTML = firstNum+ " + " +secondNum+ " = " + (firstNum + secondNum);

    clearInputs();
}

subtract = function() {
    var firstNum = Number(num3.value);
    var secondNum = Number(num4.value);

    outputS.innerHTML = firstNum - secondNum;

    clearInputs();

}

multiply = function() {
    var firstNum = Number(num5.value);
    var secondNum = Number(num6.value);

    outputM.innerHTML = firstNum * secondNum;

    clearInputs();
}

function clearInputs() {
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";

}