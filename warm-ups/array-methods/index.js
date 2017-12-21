// age > 18
// sorted alphabetically

let sortedOfAge = (arr) => {
    return arr.filter((person) => {
        return person.age > 18;
    }).sort((person1, person2) => {
        return person1.lastName.localeCompare(person2.lastName);
    });
    // return arr.sort((person1, person2) => {
    //     person1 = person1.lastName;
    //     person2 = person2.lastName;
    //     if (person1 < person2) {
    //         return -1;
    //     } else if (person1 > person2) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // });
};

module.exports = sortedOfAge;


// sort the array
// loop array create li tags and text nodes containing the person info
// append nodes to li
// append li to ul
let data = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];

  let sortByAge = (arr) => {
    return arr.sort((p1, p2) => p1.age - p2.age);
};

  let displayToHtml = (arr) => {
    let sortedPeeps = sortedByAge(arr);
    sortedPeeps.forEach((person) => {
        let li = document.createElement("li");
        li.innerHTML = `${person.firstName} ${person.lastName} is ${person.age}`;
        let id = document
    });
};

// Incomplete Notes!!



