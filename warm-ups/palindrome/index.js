function isPalindrome(str) {
    
    // let fixedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    let fixedStrg = str.toLowerCase().replace(/[^A-z]/g, "");

    // let reverseStr = fixedStr.split("").reverse().join("");
    for(i = 0; i < str.length / 2; i++) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}

// The for loop may be a longer way to write this, but it is much faster in processing speed
module.exports = isPalindrome;
