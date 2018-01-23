// STEP 1: write a function and export

    // Exporting an annonymous function:
    module.exports = function() {
        console.log("Hello Erica");
    }

    // Exporting a named function
    function helloErica() {
        console.log("Hello Erica!!")
    }
    // write separate statement to export named functions
    // do not call function (e.g. module.exports = helloErica() is incorrect)
    module.exports = helloErica

    