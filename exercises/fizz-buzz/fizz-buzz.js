// var fizzBuzz = function(n) {
//     var numArray = [];
    
//     for(i = 0; i < n; i++) {
//         numArray.splice(i,i.length -1)
//         numArray.push([i+1])
    
//     // if ((i+1)%3 === 0) {
//     //     numArray.splice(i, 1, 'fizz');
//     // }  
//     // else if((i+1)%5 === 0) {
//     //         numArray.splice(i, 1, 'buzz');
//     // }
    
//     // else if(((i+1)%3 === 0) && ((i+1)%5 === 0)) {
//     //     numArray.splice(i, 1, 'fizzbuzz');
//     // }
    
// console.log(numArray);
// numArray = [];

//     }
// }

// console.log(fizzBuzz(15));





var fizzBuzz = function(n){
    var output = [];

    for( i = 1; i <= n; i++) {
    if ((i) % 15 === 0) {
        output.push("fizzbuzz")
    } else if ((i) % 3 === 0) {
        output.push("fizz")
    } else if ((i) % 5 === 0) {
        output.push("buzz") 
    } else {
        output.push(String(i))
    }
    }
    return output;
}


console.log(fizzBuzz(20));