// Functions Exercise

// 1. Write a function with 2 parameters as inputs that returns the sum of the 2 params:
function sum(num1,num2) {
    return num1 + num2
}
console.log(sum(5,6));

// 2. Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(num1,num2,num3) {
    if (num1 > num2 && num1> num3) 
        return num1 
    else if (num2 > num1 && num2 > num3) 
        return num2  
    else if (num3 > num1 && num3 > num2) 
        return num3
    else console.log("Error: These numbers are equal")
}
console.log(largestNum(4,5,4));

// 3. Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd (num1) {
    if (num1%2 === 0)
        return "even"
    else return "odd"
}

console.log(evenOrOdd(8));

// 4. Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
var stringFunction = function(string) {
    if(string.length <= 20) {
        console.log(string + string);
    }
    else console.log(string.slice(0,(string.length/2)));
}

stringFunction("watermelonwatermelonwatermelon");

