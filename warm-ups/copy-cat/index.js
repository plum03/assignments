let person = {name: "Erica"}
var copyPerson = {}


function copyCat (obj) {
    return Object.assign(copyPerson, obj)
    return copyPerson // returns {name: "Erica"} -> successful copy
}

console.log(copyCat(person))

person.name = "Joe"
console.log(person) // returns {name: "Joe"}
console.log(copyPerson) // returns {name: "Erica"}

// Same solution, different way to write it:

let makeCopy = obj => {
    return Object.assign({}, obj)
}
let copyObj = makeCopy(inputObj)
console.log(copyObj)


// Long-hand solution, using for-in loop:
let makeCopy2 = obj => {
    let output = {};
    for (let key in obj) {
        output[key] = obj[key]
    }
    return output
}

let copyObj2 = makeCopy2(inputObj)

console.log(copyObj2)



