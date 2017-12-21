// Example of a common higher-order function
// document.getElementById("id").addEventListener("click", function() {
    // ... define function here ...
// });

let array = [1, 2, 3];

array.filter(function(item1, item2) {

});



let database = [
    {name: "Ben",
    age: 29
},
    {name: "Celeste",
    age: 75
},
    {name: "Luke",
    age: 9
},
    {name: "Matthew",
    age: 26
},
    {name: "Ken",
    age: 38
}
];

// Find average of person.age values
let avgAge = database.reduce(function(total, obj) {
    return total.age + obj.age; // takes current num and adds to total, starting at specified total value (0 is default)
}, 0) / database.length; //divide sum by length of array to get average

console.log("Average Age: " +avgAge);
// filter, forEach, map

// print all names in database array - Use forEach method
database.forEach(function(person, i) {
    console.log(i + ": " +person.name);
});

// sort method
// takes 2 items at a time from the array for comparison
let alphabetizeDatabase = database.sort(function(person1, person2){
    person1 = person1.name.toLowerCase(); // sort compares unicode values, toLowerCase to clean inputs before sort
    person2 = person2.name.toLowerCase();
    if(person1<person2) {
        return -1; // if person1 is smaller, give lower sort order
    } else if (person1 > person2) {
        return 1; // if person1 is greater, give higher sort order
    } else {
        return 0; // if the names are the same, no sort order
    }
});

alphabetizeDatabase.forEach(function(person) {
    console.log(person.name);
});

let youngestToOldest = database.sort(function(person1, person2) {
    person1 = person1.age;
    person2 = person2.age;

    if(person1 < person2) {
        return -1;
    } else if (person1 > person2) {
        return 1;
    } else {
        return 0;
    }
});

youngestToOldest.forEach(function(person) {
    console.log(person.name + " " + person.age);
});

let oldestToYoungest = database.sort(function(person1, person2) {
    person1 = person1.age;
    person2 = person2.age;

    if(person1 < person2) {
        return 1;
    } else if (person1 > person2) {
        return -1;
    } else {
        return 0;
    }
});

oldestToYoungest.forEach(function(person) {
    console.log(person.name + " " +person.age);
});


// reduce method - reduces array to a single value
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0); // 0 indicates starting value, will return (0 + sum of array)

console.log(sum);

// using reduce method w/ non-numerical values
let namesArr = ["Ben", "Amy", "Pat", "John"];

let graph = namesArr.reduce(function(obj, name, i) {
    obj[i] = name;
    return obj;
}, {});  // start w/ empty object, since working w/ objects

console.log(graph);

let avg = numbers.reduce(function(total, num) {
    return total + num; // takes current num and adds to total, starting at specified total value (0 is default)
}) / numbers.length; //divide sum by length of array to get average

console.log(avg);

