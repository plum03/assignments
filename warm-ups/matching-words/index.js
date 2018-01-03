function multiWord(str) {
    let fixedStr = str.toLowerCase().split(" ");
    for (i = 0; i < str.length; i++) {

    }
}

// Separate all words in string into an array to evaluate
// Loop through the array
// for each string, check if it appears elsewhere in the array
// if so, check if its not already in output array, and push it there


let matchWords = (str) => {
    let output = []; // create blank array to contain result
    let arr = str.toLowerCase().split(" "); // split string into array of each word
    
    for (i = 0; i < arr.length; i++) {
        let currentWord = arr.splice(i, 1)[0];
        currentWord = currentWord.replace(/^\w/g, "");

        for (j = 0; j < arr.length; j++) {
            let checkAgainst = arr[j].replace(/^\w/g, "");
            if(currentWord === checkAgainst && !output.includes(checkAgainst)){
                output.push(currentWord);
                arr.splice(j, 1);
            }
        }
    }
    return output;
};

let removeDup = (str) => {
    let result = [];
    let arr = str.toLowerCase().split(" ");
    for (i = 0; i < arr.length; i++) {
        if (result.lastIndexOf(arr[i] == -1)) {
            result.push(arr[i]);
        }
    } return result;
};

let caveInscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";



matchWords(caveInscription);