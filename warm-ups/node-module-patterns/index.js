// STEP 1a: import function helloErica() from greet1.js

const greet = require("./greet1")

// to call imported function:
greet()

// STEP 2a:  adding function expressions as properties on module.exports
const greet2 = require('./greet2')

// to call the function
greet2.greet2()

//OR
const greet2a = require('./greet2').greet2
// and call w/:
greet2a();


// STEP 3
const greet3 = require('./greet3')

greet3.greet()

