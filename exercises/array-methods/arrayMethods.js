var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Item 1
vegetables.splice((vegetables.length -1), 1);

console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

// Item 2
fruit.splice(0,1)

console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

// Item 3
console.log(fruit.indexOf("orange"));


// Item 4
fruit.push(fruit.indexOf("orange"));

console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

// Item 5
console.log(vegetables.length);

// Item 6
vegetables.push(vegetables.length);

console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

// Item 7
var food = fruit.concat(vegetables);

console.log("food: " + food);
console.log("fruit: " + fruit);
console.log("vegetables: " + vegetables);

// Item 8
food.splice(4,2);

console.log("food: " + food);

// Item 9
food.reverse();

console.log("food: " + food);
// Item 10
console.log(food.toString());



