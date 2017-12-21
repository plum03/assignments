// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.

let sumDouble = function(a ,b) { 
    if(a===b) {
        return 2*(a+b);
    } else {
        return a+b;
    }
};

module.exports = sumDouble;

