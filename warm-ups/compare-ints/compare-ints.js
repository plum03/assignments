// OBJECTIVE: are the last digits in 2 non-negative numbers the same?

// sloppy, but works 
function compareInts(int1, int2) {
    if (Number(int1%10)===Number(int2%10)) {
        return true;
    } else return false;
}

console.log(compareInts(-269, 359));


function shareDigits(int1, int2) {
    return int1 % 10 === int2 % 10;
}

// restricting inputs
function isValidPwd(input) {
    return input.match(/[^\W\D]+/); //does not contain a non-word or non-digit
}