// Count code: Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count. countCode("aaacodebbb") -> 1 countCode("codexxcode") -> 2 countCode("cozexxcope") -> 2 function countCode(string) { }

// Use RegExp methods to find matching patterns:
function countCode(str) {
    var count = (str.match(/co.*?e/g)).length;
    console.log(count);
}

countCode("copekskhcokeslkecozeskklconeslkdcode");

// Can also use:
function countCode2(str) {
    var count = (str.match(/co[a-z]e/g)).length;
    console.log(count);
}
countCode2("copekskhcokeslkecozeskklconeslkdcode");


// .*? to indicate wildcard
// g for global, otherwise will only find 1st occurrance 
