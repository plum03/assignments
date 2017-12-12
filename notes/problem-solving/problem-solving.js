// When approaching a complex problem, start by breaking it down into smaller steps/code chunks required to solve.
// Write steps (structure) in pseudo-code

// Step 1. UNDERSTAND THE PROBLEM: State the objective, Determine what result you want to get
// *** Ask for clarification *** Instructions can be interpreted in various ways -- Make sure you understand what is being asked of you
// Objective: given a group of voters, find the % of voters in each age group that voted in the last election


// Step 2: MAKE A PLAN
// Plan:
// 1. group them by age groups
// 2. group them by who voted
// 3. determine # who voted in each age group, calculated % of (voted/total pool)
// 4. output the % of each age group (3) to the console


// Step 3: CARRY OUT YOUR PLAN, STEP-BY-STEP

// Given: Array of voters
var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// plan-part1: group by age
var low = [];
var mid = [];
var high = [];

function ageSort() {
    for(i=0; i<voters.length; i++) {
        if(voters[i].age < 26) {
            low.push(voters[i])
        } else if(voters[i].age < 36) {
            mid.push(voters[i]) 
        } else if(voters[i].age < 56) {
            high.push(voters[i])
        }
    }
    // print results (test) to make sure your function returns correct results, before moving to next step
    console.log(low)
    console.log(mid)
    console.log(high)
}
ageSort()  // Good! The ageSort() function works.  Proceed to the next step

// plan-part2: determine # who voted 
function calculatePercentage(arr) {
    var total = arr.length
    var voted = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].voted) {  //can also write as if(arr[i]["voted"]), but not as commonly used
            voted++;
        }
    }
    return ((voted/total)*100).toFixed(0); 
}
// test function:
console.log("18-25: " + calculatePercentage(low)+ "%")
console.log("26-35: " + calculatePercentage(mid)+ "%")
console.log("36-55: " + calculatePercentage(high)+ "%")

// Output should be similar to:
// 18-25: n%
// 26-35: n%
// 36-55: n%

// Yay, it works!!

// Another way to solve this problem by combining the 2 functions into 1
// Note: 2nd iteration of this function is better than 1st, but still not the most efficient way

function ageVoteSort() {
    var lowTotal = [];
    var lowVoted = [];
    var midTotal = [];
    var midVoted = [];
    var highTotal = [];
    var highVoted = [];


    for(i=0; i<voters.length; i++) {
        if(voters[i].age < 26) {
            lowTotal ++
            if(voters[i].voted){
                lowVoted ++
            }
        } else if(voters[i].age < 36) {
            midTotal++
            if(voters[i].voted) {
                midVoted++
            } 
        } else if(voters[i].age < 56) {
            highTotal ++
            if(voters[i].voted) {
                highVoted++
            }
        }
    }
    console.log("18-25: " +((lowVoted/lowTotal)*100).toFixed(0)+ "%")
    console.log("26-35: " + ((midVoted/midTotal)*100).toFixed(0)+ "%")
    console.log("36-55: " + ((highVoted/highTotal)*100).toFixed(0)+ "%")
}
ageVoteSort()
