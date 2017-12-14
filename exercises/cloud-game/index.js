// Text-based game

const rs = require("readline-sync");
// Initial Greeting
console.log("You wake up on a cloud.  You have no idea how you got there or how this is even possible.  \nIt is beautiful and serene up here, but it's almost dinnertime and your stomach is growling.  You know you can't survive long on this cloud.  \nYou can see your house on the ground below, now all you have to do is find a way to get there.\n");

var inventory = [];
var isAlive = true;
var unicornInventory = [];
// var cupcakeIsThere = true;  fix in v2.0

while (isAlive) {

    let userInput = rs.question("What should you do?\n");
    userInput = userInput.toLowerCase();

    if (userInput.includes("look") && inventory == "") {
        console.log("\nYou look around you.  To one side of you there is a delicious looking cupcake.  You love cupcakes!  Your stomach growls even louder. \nYou also see a rainbow leading down from the cloud.  You peer over the edge of the cloud and see that the rainbow reaches all the way to the ground.  You wonder if you can slide down, but it doesn't look solid or safe.  \nTo the other side of you, you see a beautiful unicorn with wings.  You wonder if the unicorn would fly you back home, but this unicorn seems especially grumpy for some reason and it's horn is extra sharp and pointy.");
    } else if (userInput.includes("look") && inventory.includes("cupcake")) {
        console.log("You look around you.  To one side you see a rainbow leading down from the cloud.  You peer over the edge of the cloud and see that the rainbow reaches all the way to the ground.  You wonder if you can slide down, but it doesn't look solid or safe.  \nTo the other side of you, you see a beautiful unicorn with wings.  You wonder if the unicorn would fly you back home, but this unicorn seems especially grumpy and it's horn is extra sharp and pointy.");
    } else if (userInput.includes("take") && userInput.includes("cupcake")) {
        inventory.push("cupcake");
        console.log("You pick up the cupcake.  It looks delicious.  You are tempted to eat it, but you know your mom is cooking your favorite meal and worry it might spoil your appetite.  It sure smells good though!!");
    } else if (userInput.includes("eat") && userInput.includes("cupcake")) {
        inventory = [];
        console.log("You know you shouldn't eat the cupcake, after all your mother has been working hard to make your favorite meal and this sugary confection will definitely ruin your apetite.  \nBut the pink sparkly cupcake is just too delicious to resist.  Besides, nothing bad could ever come from eating sweets you just find laying around, right?\nYou take a bite ... Mmmmmm... it's the most delicious thing you've ever tasted!");
        // Yay, your code works.  Great job!  Keep going.
    } else if (userInput.includes("unicorn") && inventory == "") {
        console.log("You walk toward the unicorn, but before you can say anything, the unicorn glares at you, says \'It\'s rude to approach a unicorn without bearing gifts\' and angrily stomps it's hooves as it turns it\'s back on you.  \nQuicker than you can think, the unicorn lifts it\'s tail and farts a spectacular stream of glitter right in your eyes. The glitter stings, momentarily blinding you.  \nAfter several minutes of bawling and crying for your mommy, your tears wash the glitter out and you can see again.  \nGeeze, that unicorn is really mean when it's hungry!  If only you had something to feed it.");
    } else if (userInput.includes("ride") && userInput.includes("unicorn") && unicornInventory === 0) {
        console.log("If you want to ride me, you'll have to buy me dinner first");
    } else if (userInput.includes("give") && userInput.includes("unicorn") && userInput.includes("cupcake") && inventory.includes("cupcake")) {
        console.log("This unicorn is grumpy and grumpy unicorns are never helpful.  You hold out your delicious pink cupcake and offer it to the unicorn who eats it in one bite.\n\'Thank you, I feel much better now!  If there is anything I can do to help you, just ask.\' ");
        unicornInventory.push("cupcake");
    } else if (userInput.includes("ride") && userInput.includes("unicorn") && unicornInventory.includes("cupcake")) {
        console.log("After being so kind to the unicorn, it is happy to give you a ride home.  The unicorn kneels down, you hop on it's back.  \'Hold on tight!\' says the unicorn as it flaps it\'s wings and glides gracefully off of the cloud. \nThe ride is smooth and the feeling of the wind in your hair is exhilirating.  You take in the sights of the city below and daydream about showing off your new unicorn pal to your friends. \nJust then, the unicorn starts moaning.  \'Are you alright?\' you ask the unicorn.  \nThe unicorn moans louder \'I didn\'t wait 30 minutes after eating to fly!!!\'  The unicorn's wings start cramping up and stop flapping.  You're now both freefalling.  The unicorn is heavier and hits the ground first.  A huge cloud of glitter bursts into the sky.  Your lungs and eyes fill with glitter.  The pain is more intense than anything you\'ve ever experienced.  Your last few moments are in agony until your body finally splatters on the ground. \nYOU ARE DEAD!");
        break;
    } else if (userInput.includes("down") && userInput.includes("rainbow") && inventory == "") {
        console.log("The rainbow doesn't look solid enough to hold you, but neither does this cloud you've been standing on and yet somehow it just works.  You say a prayer and go for it.  To your surprise, you glide safely and smoothly down.  You land in a pot of gold and are immediately discovered by a leprachaun who think you are trying to steal the pot of gold he has been saving to buy a special cloud-cupcake.  Before you can say anything, he snatches you out of his pot-o-gold, takes you home and boils you into stew.  You taste delicious.  \nYou are dead.\nGAME OVER");
        break;
    } else if (userInput.includes("down") && userInput.includes("rainbow") && inventory.includes("cupcake")) {
        console.log("The rainbow doesn't look solid enough to hold you, but neither does this cloud you've been standing on and yet somehow it just works.\nYou say a prayer and go for it.  To your surprise, you glide safely and smoothly down.\nYou land in a pot of gold and are immediately discovered by a leprachaun who thinks you are trying to steal the pot of gold he has been saving to buy a rare cloud-cupcake.\nHe snatches you out of his pot-o-gold to take you home and boil you into stew, but as he lifts you up, the cupcake you have been saving, drops from your hand.\nThe greedy leprachaun takes the cupcake and pops it into his mouth.  He eats the cupcake too fast, chokes and dies.  You take the pot of gold, in exchange for your cupcake, and head home, making it just in time for dinner. \nYOU WIN!!");
        break;
    } else {
        console.log(userInput + "?!?!  You'd better think of a better idea or you're going to die out here!! ");
    }
}



// look -> unicorn, cupcake, rainbow **DONE**
// take cupcake -> put in inventory + message to confirm **DONE**
// eat cupcake -> msg = Yummy **DONE**
// unicorn:  **DONE**
// if ride no cupcake -> glitter fart + im hungry **DONE**
// if give cupcake -> add to unicorn inventory **DONE**
// if unicorn inventory = cupcake & ride unicorn -> fly & die **DONE**
// rainbow:
// if rainbow: slide down safely
// if yes cupcake, you live
// if no cupcake, you die