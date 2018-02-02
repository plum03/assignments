const chai = require("chai");
const assert = chai.assert;

const every = require("../index.js");
const some = require('../index.js')

tests = [
    {
        arr: [1, 2, 3],
        cb: (num)=> typeof num === "number"
    },
    {
        arr: [1, 2, "3"],
        cb: (num)=> typeof num === "number"
    },
    {
        arr: [1, "2", "3"],
        cb: (num)=> typeof num === "number"
    },
    {
        arr: ["1", "2", "3"],
        cb: (num)=> typeof num === "number"
    }
]

describe("every and some warmup"), () => {
    it("should return true", ()=>{
        assert.isTrue(every,(tests[0].arr, tests[0].cb))
    });
    it("should return false", ()=>{
        assert.isFalse(every,(tests[1].arr, tests[1].cb))
    });
    it("should return true", ()=>{
        assert.isTrue(some,(tests[2].arr, tests[2].cb))
    });
    it("should return false", ()=>{
        assert.isFalse(some,(tests[3].arr, tests[3].cb))
    });
}