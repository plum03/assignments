// we need to loop through an array, as well as the query object

// then we need to filter the object

let collection = [  
    {a: 1, b: 1, c: 2},
    {a: 0, b: 0, c: 2},
    {a: 0, b: 1, c: 0},
    {a: 1, b: 2, c: 2}
];

let queryObj = {
    a: 1,
    b: 5
}

let filterDatabase = (query, collection) => {
    return collection.filter((resource) => {
        // this will return true or false
        for (let key in collection) {
            // check if query matches resource
            if(query[key] !== resource[key]) {
                // query is the object key is the name
                // by combining query[key] you get the value of the key
                // assume true and make if statement prove false so that it runs through all conditions
                // if assume false and check for satisfy condition, will return true first time the condition is met, and stop checking other values
                return false;  
            }
        }
        return true;
    })
}