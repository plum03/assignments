const chai = require("chai");
const assert = chai.assert;

const twoSum = require('../index.js');

const test = [
    {
        param1: [1,2,3],
        param2: 4,
        output: [0,2]
    },
    {
        param1: [3, 5, 6, 2],
        param2: 11,
        output: [1,2]
    },
]

describe("search array for index of two numbers that add to the target number", () => {
    it("should return [0,2]", () => {
        assert.deepEqual(twoSum(test[0].param1, test[0].param2), [0,2])
    })
    it("should return [1,2]", () => {
        assert.deepEqual(twoSum(test[1].param1, test[1].param2), [1,2])
    })
})