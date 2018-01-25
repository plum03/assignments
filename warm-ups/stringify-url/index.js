let stringify = (url, query) => {
    url += "?";
    for (let key in query) {
        url += `${key}=${query[key]}&`
    }
    return url
}

let url = "http://localhost:8080/monkeys";
let query = {
    color: "black",
    species: "howler"
}

// query.color would return black
// query.key will search for a property called "key" in the object
// must use query[key] to search for the value of the object property

stringify(endoint, query); // http://localhost:8080/monkeys?color=black&species=howler