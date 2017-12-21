
const sumDouble = require("../index.js");

const chai = require("chai");

const assert = chai.assert;

const tests = {
    case1: {
        param1: 3,
        param2: 3
    },
    case2: {
        param3: 2,
        param4: 3
    },
    case3: {
        param5: 4,
        param6: 4
    }
};

describe("Testing sumDouble function", function() {
    it("Should return 12", function() {
        assert.equal(sumDouble(tests.case1.param1, tests.case1.param2), 12);
    });
    it("Should return 5", function() {
        assert.equal(sumDouble(tests.case2.param3, tests.case2.param4), 5);
    });
    it("Should return 16", function() {
        assert.equal(sumDouble(tests.case3.param5, tests.case3.param6), 16);
    });
});