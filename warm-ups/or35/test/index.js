// This file is associated with the nodingBat warmup1 or35 exercise which can be found at <http://nodingbat.com/exercises/warmup-1/or35>

// Return true if the given non-negative number is a multiple of 3
// or a multiple of 5. (Hint: Use the % 'mod' operator)


// set variable for file to test
const or35 = require("../index.js");
// set variable to include chai package
const chai = require("chai");
// set variable to include chai assert library
const assert = chai.assert;

// create switch to test multiple conditions
const tests = {
    case1: 9,
    case2: 10,
    case3: 8
};

describe("Testing or35 function", function() {
    it("should return true", function() {
        assert.equal(or35(tests.case1), true);
    });
    it("should return true", function() {
        assert.equal(or35(tests.case2), true);
    });
    it("should return false", function() {
        assert.equal(or35(tests.case3), false);
    });
});

