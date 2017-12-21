// Return true if the given non-negative number is a multiple of 3
// or a multiple of 5. (Hint: Use the % 'mod' operator)

let or35 = function(int) {
    return((int %3 === 0) || (int %5 === 0));
};


// allow export for testing
module.exports = or35;