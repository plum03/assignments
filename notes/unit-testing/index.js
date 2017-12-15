// UNIT TESTING WITH CHAI

// nest test folder (with index.js file) in your project folder, test folder MUST be named "test"

function multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("Invalid input");
    }
    return x * y;
}



// This command will allow the multiply() function to export & be made available to other folders (e.g. our test folder)
module.exports = multiply;
