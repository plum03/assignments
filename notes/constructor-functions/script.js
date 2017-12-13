
// Constructor w/ predefined values -- Every object created from this will be exactly the same
function TickyTackTemplate() {
    this.sqrFt = 3000;
    this.bedrooms = 4;
    this.bathrooms = 3.5;
    this.garage = 3;
    this.redRum = true;
}

var samantahsNewHouse = new TickyTackTemplate();
var tyersNewHouse = new TickyTackTemplate();


function CustomTemplate(sqrFt, bedrooms, bathrooms, garage, redRum) {
    AddOns.call()
    this.sqrFt = sqrFt;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
    this.redRum = redRum;
}

var ericasNewHouse = new CustomTemplate(4000, 4, 5, 2, false);
console.log(ericasNewHouse);
// Cool. Now we have some variations.  What if we want the option of add-ons?

// Inheritance & Prototypes
function AddOns (underwaterObservatory, pool, color) {
    this.underwaterObservatory = underwaterObservatory;
    this.pool = pool;
    this.color = color;
}

function CustomTemplate(sqrFt, bedrooms, bathrooms, garage, redRum,underwaterObservatory, pool, color) {
    AddOns.call(this, sqrFt, bedrooms, bathrooms, garage, redRum);
    this.sqrFt = sqrFt;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
    this.redRum = redRum;
}

// CustomTemplateWithAddOns.prototype = new Object(CustomTemplate.prototype);


// More on Prototypes: Writing methods to compliment constructor function
function Dog(name, breed, color, age, barkSound) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.barkSound = barkSound;
}

Dog.prototype.bark = function() {
    return this.barkSound;
};

var myDog = new Dog("Buckeye", "Chocolate Lab", "Brown", 1, "woof");
var yourDog = new Dog("Snarkovich", "Rat Lab", "Black", 1, 'aaarf');
var myWolf = new Wolf("Ginger", "Siberian", "White", 3, "ooowwwwooooo");

console.log(myDog);
console.log(yourDog);

myDog.bark();

function Wolf (name, breed, color, age, barkSound) {
    Dog.call(this, name, breed, color, age, barkSound);
    // call Dog function rather than rewritting all the instructions which would be the same
    // but Wolf needs it's own constructor bc Wolf != Dog
}
// Wolf != Dog so can't use Dog.prototype
// must create Wolf.prototype and set equal to Dog.prototype
// Wolf.prototype = Object.create(Dog.prototype);

Wolf.prototype.bark = function() {
    return this.barkSound.toUpperCase() + "!!!!!!";
};

console.log(myWolf);
myWolf.bark();

// Even though Dog != Wolf, you can create a function that will process both, because they have shared attributes/properties
function testDog(dog){
    if(dog.bark().includes("!")) {
        console.log("Sorry too loud");
    } else {
        console.log("I'll take it");
    }
}

testDog(myDog);
testDog(myWolf);
