// This function takes a string and returns a string with the opposite capitalization
// all uppercase letters -> lowercase; lowercase letters -> uppercase

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(str) {
    var output ="";
    for (i=0; i< str.length; i++) {
        if (isCaps(str[i])) {
            output += str[i].toLowerCase();
        }
        else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}

console.log(antiCaps("stRIng"));


// This function takes a string and returns a string with the first letter lowercase and all others uppercase
function lowerCaps(string) {
    var result = string.charAt(0).toLowerCase() + string.slice(1).toUpperCase();
    return result;
 }
 console.log(lowerCaps("Erica"));

 // This function will take a string input and capitalize the first lettert and lowercase the rest
function fixCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(fixCase("tHis is REALLY baD fORm"));
