

let twoSum = (arr, num) => {

    let result = [];
    // arr[i] + arr[j] = num
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] === num - arr[i]) {
                result.push(i, j)
            }
        }
        return result;
    }

    // return arr[i] & arr[j]

}

let bensTwoSum = (arr, sum) => {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === sum) {
                return[i, j]
            }
        }
        return result;
}}

module.exports = twoSum;

console.log(twoSum([1,2,3], 4));
console.log(bensTwoSum([1,2,3], 4));
