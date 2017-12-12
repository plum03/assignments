//Prelims
// 1. Write a for loop that prints to the console the numbers 0 through 9
var arr = [];

for (i=0; i <= 9; ++i) {
    arr.push(i);
}
console.log(arr);

// 2.  Write a for loop that prints to the console 9 through 0
for (i=9; i >= 0; --i) {
    console.log(i);
}

// 3.  Write a for loop that prints these fruits to the console
var fruit = ["banana", "orange", "apple", "kiwi"];

for (i=0; i < fruit.length; ++i) {
    console.log(fruit[i]);
}

// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array
var array = [];
for (i=0; i <=9; ++i) {
    array.push(i);
}
console.log(array);

// 2.  Write a for loop that prints to the console only even numbers 0 through 100.
for(i=0; i<=100; ++i) {
    if(i%2 == 0) {
        console.log(i);
    }
}

// 3. Write a for loop that will push every other fruit to an array. 
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for(i=0; i < fruit.length; i+=2) {
        console.log(fruit[i]);
}

// Silver Medal
var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  // 1.

  for (i=0; i<peopleArray.length; i++) {
      console.log(peopleArray[i].name);
  }

  // 2.
  var names = [];
  var occupations = [];

  for (i=0; i<peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
  }

  console.log(names);
  console.log(occupations);

  // 3.

 
 var evenNames = [];
 var oddOccupation = [];
 for (i=0; i < peopleArray.length; i ++) {
     if(i%2 === 0) {
         evenNames.push(peopleArray[i].name);
     }
     else {
         oddOccupation.push(peopleArray[i].occupation);
     }
 }

console.log(evenNames);
console.log(oddOccupation);

// Gold Medal
// 1. 
var arr1 = [];
for(i=0; i<3; i++) {
    arr1.push([])
    for(j=0; j<3; j++){
        arr1[i].push(0);
    }
}

console.log(arr1);

// 2.
var arr2 = [];
for(i=0; i<3; i++) {
    arr2.push([])
    for(j=0; j<3; j++){
        arr2[i].push(i);
    }
}

console.log(arr2);

// 3.
var arr3 = [];
for(i=0; i<3; i++) {
    arr3.push([])
    for(j=0; j<3; j++){
        arr3[i].push(j);
    }
}

console.log(arr3);

// 4.
for(i=0, j=0; i<arr3.length, j<[i].length; i++, j++) {
    if(Number.isInteger(j)){
        arr3[j].push('x')
    }  
}
console.log(arr3);