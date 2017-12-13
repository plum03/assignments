var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));  


function encrypt(input, shift) { 
    // correct negative shift inputs
    if (shift < 0) {
        return encrypt(input, shift + 26)
    }
    // empty bucket
    output = "";
    //cycle through each character in string
    for(i=0; i<string.length; i++) {
        // isolate each individual character
        var char = string[i];
        
    }
}