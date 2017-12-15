// let counter = 0;  // sets date to 1/1/1970
// function add() {
//     counter++;
//     console.log(counter);
//     if (counter === 10) {
//         clearInterval(timer);
//     }
// }
// console.log(counter);

// let timer = setInterval(add, 1000);

let counter2 = 0;

function add2() {
    let beginningOfTime = new Date(counter2);
    let minutes = beginningOfTime.getUTCMinutes();
    let seconds = beginningOfTime.getUTCSeconds();
    let ms = beginningOfTime.getUTCMilliseconds();
    
    console.log(minutes + ":" + seconds + ":" + ms);
    
    counter2 += 10; 
    if(counter2 === 6000) {
        clearInterval(timer2);
    }
}

let timer2  = setInterval(add2, 10);

