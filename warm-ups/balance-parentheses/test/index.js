const chai = require("chai");
const assert = chai.assert;

const isBalanced = require("../index.js");

const tests = [
    ")",
    "(()",
    "(())",
    "))((",
];

describe("balance parentheses", () => {
    it("should return false", () => {
        assert.equal(isBalanced(tests[0]), false);
    })
    it("should return false", () => {
        assert.equal(isBalanced(tests[1]), false);
    })
    it("should return true", () => {
        assert.equal(isBalanced(tests[2]), true);
    })
    it("should return false", () => {
        assert.equal(isBalanced(tests[3]), false);
    })
})