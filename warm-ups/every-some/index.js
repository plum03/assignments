function every(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            return false;
        }
    }
    return true;
}

let some = (arr, cb) => {
    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return true;
        }
    }
    return false;
}

module.exports = {
    every,
    some
}