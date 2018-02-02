const chai = require("chai");
const assert = chai.assert;

const validateIp = require("../index.js");

let tests = {
    case1: "123.123.123.123",
    case2: "12.12.12",
    case3: "256.256.256.256",
    case4: "12a.12.12a.12."
}

describe("validate IP address", () => {
    it("should return true", ()=> {
        assert.isTrue(validateIp(tests.case1, true))
    })
});