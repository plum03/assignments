function isPalindrome(str) {
   // remove characters
    let fixedStr = str.toLowerCase().replace(/[^A-z]/g, "")
    let reverseStr = fixedStr.split("").reverse().join("")

    if (fixedStr !== reverseStr) {
        return false
    }
    return true
}

// The for loop may be a longer way to write this, but it is much faster in processing speed

function isPalindrome2(str) {
    let fixedStr = str.toLowerCase().replace(/[^A-z]/g, "")

    for(i = 0; i < fixedStr.length / 2; i++) {
        let first = fixedStr[i]
        let last = fixedStr[(fixedStr.length - 1) - i]
        if (first !== last) {
            return false
        }
    }
    return true  
}

module.exports = isPalindrome
module.exports = isPalindrome2
