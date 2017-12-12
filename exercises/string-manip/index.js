var ask = require('readline-sync');  
console.log('Hello! My name is Erica. Help me get to know you!\n');  
var firstName = ask.question('What is your first name? ');  
var lastName = ask.question('and your last name?');

console.log('Nice to meet you ' +firstName.toUpperCase()+ " " +lastName.toUpperCase()+ "\nYou have " +(firstName.length + lastName.length)+ " letters in your name.\n" +firstName.length+ " letters in your first name and " +lastName.length+ " letters in your last name.");

var foods = ask.question('\nTell me your 10 favorite things to eat and I\'ll repeat it back to you.');

console.log('\nWhoa, that was a LOT longer than I thought!  Here\'s the last half of it: ' + foods.slice(Math.floor(foods.length/2)));

var repeatStuff = ask.question('\nWould you like me to start at a different point? Your input was ' + foods.length+ " characters long.  Pick a number between 1 and " +foods.length+ " and I will start from that point.")

console.log(foods.slice(repeatStuff-1));

