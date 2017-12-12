// Practice in creating objects


// Object 1
var aquafina = {
    flavor: "Dragonfruit",
    calories: 0,
    hasSugar: false,
    ingredients: ["sparkling water", "natural flavors"],
    slogan: function() {
        console.log("Aquafina " +this.flavor+ "Sparkling Water has " +this.calories+ " calories.");
    }
}
aquafina.slogan();

// Object 2
var coffee = {
    color: "brown",
    ounces: 6,
    season: "Spring",
    winter: function() {
        if(this.season === "Winter") {
            console.log("I'll take it hot");
        }
        else{
            console.log("Iced is nice!");
        }
    }
}
coffee.winter();

// Object 3
var erica = {
    gender: "female",
    height: 167.64,
    isTired: true,
    doWork: function() {
        if(tired == false){
            console.log("Do Something");
        }
        else {
            console.log("Go to sleep");
        }
    }
}
erica.doWork()