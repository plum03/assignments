function randomPassword(int) {
    // let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
    // Rather than type out all of the characters, use charcode
    var output = "";
    for(i = 0; i < int ; i++) {
        output += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
        // gives range from 33 to 126 (character, number & letter ASCII range)
    }
    return output;
}

// console.log(String.fromCharCode(65));

console.log(randomPassword(10));