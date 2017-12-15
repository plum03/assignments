var errandBoy = function(errand) {
    errand();
};

function goShopping() {
    console.log ("I bought some stuff.");
}

function pickupDryCleaning() {
    console.log ("Here are your clothes");
}

function coffeeRun() {
    console.log("Here's your coffee.");
}

errandBoy(goShopping); // Do NOT include () for goShopping function when passing it into the higher-order errandBoy function

function chauncey(command) {
    switch(command) {
        case "I need new things":
            return goShopping;
        case "I need my suit pressed":
            return pickupDryCleaning;
        case "I am sleepy":
            return coffeeRun;
    }
}

chauncey("I need new things");

let thingAnnoyingMeToday = "I need new things";
let newErrand = chauncey(thingAnnoyingMeToday);
errandBoy(newErrand);

