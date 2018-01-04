// function isSameDataType (data) {
//     return typeof data;
// }


// function checkTypes(arr) {

//     for (i = 0; i < arr.length; i++) {
//         let row = [];
//         for (j = 0; j < row.length; j++) {
//             row[i].every(isSameDataType);
//         }
//     }
// }

const multiD1 = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, true, true]
];
console.log(checkTypes(multiD1));


const multiD2 = [
    [true, false, true],
    [false, false, true]
];
console.log(checkTypes(multiD2));

// note: With nested arrays, need several for-loops
// Step1: loop through 1st layer
// Step2: check whether each array's content all share the same data type WITHIN the array
// Step3: check whether each array's contents have same data type ACCROSS arrays




// Tim's Solution:
function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof value === typeof initial
        )
    );
}

// Ben's Solution - WARNING: DOES NOT WORK

// function checkTypes(arr) {
//     let combinedArr = arr.reduce((total, subArr) => {
//         return [...total, ...subArr];
//     });
//     let firstDataType = typeof combinedArr[0];
//     return arr.every((item) => {
//         return typeof item === firstDataType;
//     });
// }