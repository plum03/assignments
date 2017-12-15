// Use const for read-only variables to prevent accidental overriding
const multiply = require("../index.js");
// direct unit-testing file to the main file

// After installing chai pkg, create require vars for chai
const chai = require("chai");
const assert = chai.assert; // uses chai's assert library


// Then, describe your test
// Syntax: describe("Some string", someFunction() {})
describe("Testing multiplication function", function() {
    it("should output 4", function() {
        // This is where you write the function call to test, using the assert method
        assert.equal(multiply(2,2), 4);
        // Actual value first: multiply(2,2)
        //Expected value next: 4

        // Then, to test, type mocha into console -- MUST call mocha from main project folder (parent folder of test folder)
    });
    it("should output 9", function() {
        assert.equal(multiply(3,3), 9);
    });
    // When testing to make sure error checking function is working, you must wrap function to test (in this case multiply(3, "horse")) in another function so mocha's built-in try-catch will have a chance to run test before the function itself runs and throws error
    it("should throw an error", function() {
        assert.throws(function(){
            multiply(3, "horse");
         }, Error, "Invalid input");
    });
});






