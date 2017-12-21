
// Syntax for writing ES6 Classes
class Animal {
    constructor() {
        this.hasCellWall = false;
    }
    print() {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
}

class Mammal extends Animal{ // Mammal is a child of Animal, inherits Animal properties
    constructor(name, furType) {
        super(name); // this carries over the inherited properties from Animal
        this.hasFur = true;
        this.furType = furType;
    }
}

let coyote = new Animal();
let whale = new Mammal();
whale.print();  // returns hasCellWall: false, hasFur: true