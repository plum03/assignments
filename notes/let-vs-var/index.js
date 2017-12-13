var car = "Lambo";

function showCar() {
    var car = "Pinto";
    console.log(car);
}

showCar();
console.log(car);


// Scope (block, function)
// Block scoping does not apply to var declarations, only let
var i = 0;
for (i = 0; i<5; i++) {
    console.log(i); // Prints 0 - 4
}
console.log(i); // prints 5 because i was defined both w/in & outside of for
// block level scope

// 'let' is a Block Scoped variable, unlike var

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
