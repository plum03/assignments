function total(arr) {
    const total = (sum, num) => sum + num;
    return arr.reduce(total);
}

console.log(total([1, 2, 3])); // this returns 6 -- it works!

// Turn array objects into a string
function stringConcat(arr) {
    return arr.reduce((total, curr) => {
        return total + curr;
    }, "");
}
console.log(stringConcat([1, 2, 3])); // returns "123" -- it works!


function totalVotes(arr) {
    return arr.reduce((total, curr) => { // total is cumulative of arr.voted, curr = current object
        if (curr.voted) {
            return total + 1; // if voted, add 1 to the total count
        } else {
            return total; // else keep total unchanged
        }
    }, 0);
} //this works

// Get the total of all of the items in an object array
function shoppingSpree(arr) {
    return arr.reduce((total, curr) => {
        return total + curr.price;
    }, 0);
} //this works

function flatten(arr) {
    return arr.reduce((total, curr) => {
        return [...total, ...curr];
    });
} // this works!

function voterResults(arr) {
    return arr.reduce((total, curr) => {
        if (curr.age < 26) {
            total.youth++;
            if (curr.voted) {
                total.youngVotes ++;
            }
            return total;
        } else if (curr.age < 36) {
            total.mid++;
            if (curr.voted) {
                total.midVotes ++ ;
            }
            return total;
        } else if (curr.age < 56) {
            total.old++;
            if (curr.voted) {
                total.oldVotes++;
            }
            return total;
        }

    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mid: 0,
        oldVotes: 0,
        old: 0
    }); // set this object as the initial value to loop through array only once and update values
} // it works!


module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
};