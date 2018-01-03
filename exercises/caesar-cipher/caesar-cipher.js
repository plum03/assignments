// var readline = require('readline-sync');  
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
// var shift = parseInt(readline.question('How many letters would you like to shift? '));  


// function encrypt(input, shift) { 
//     // correct negative shift inputs
//     if (shift < 0) {
//         return encrypt(input, shift + 26);
//     }
//     // empty bucket
//     output = "";
//     //cycle through each character in string
//     for(i=0; i<string.length; i++) {
//         // isolate each individual character
//         var char = string[i];
        
//     }
// }

// function cipher(str, shift) {
//     let output = "";
//     shift = shift % 26;
//     for(i = 0; i < str.length; i++) {
//         output += String.fromCharCode(((str.charCodeAt(i) + shift)));
//     }
//     return output;
// }

// console.log(cipher("xyz", 5));

let cipher = (str, shift) => {
    str = str.toLowerCase();
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for(let i = 0; i < str.length; i++) {
        let key = alpha.indexOf(str[i]);
        key += shift;
        key = key % alpha.length;
        result += alpha[key];
    }
    return result;
}; 


let encryptedText = cipher("Jac0bz", 2);
let decryptedText = cipher(encryptedText, -2);

console.log(encryptedText);
console.log(decryptedText);