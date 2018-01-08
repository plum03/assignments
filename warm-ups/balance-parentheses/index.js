
function isBalanced(str) {
    let count = 0;
    for (i=0;i<str.length;i++) {
        if (str[i] === "(" ) {
            count ++
        } else if (str[i] === ")" ) {
            count --;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}

module.exports = isBalanced;
console.log(isBalanced("()()))(())"));







// function isParenthesis (char) {
//     let parens = "()";
//     if (parens.indexOf(char) > -1) {
//         return true
//     } else {
//         return false
//     }
// }

// function isOpenParen () {

// }

// function isBalanced(str){
//     let arr = str.split("");
//     let testArr = [];

//     for (i=0;i<arr.length;i++) {
//         if (isParenthesis(arr[i]))
//     }
// }