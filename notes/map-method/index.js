let desserts = ["creme brulee", "bananas foster", "flan", "apple pie", "brownies", "chocolate cake"];

function upperCase(str) {
    return str.toUpperCase();
}

let upperCaseDesserts = desserts.map(upperCase);

console.log(upperCaseDesserts);

let names = ["Ben", "Sam", "Ken", "Brayan", "Lesa", "Erica"];
let ages = [21, 32, 44, 27, 30, 17];
let occupations = ["doctor", "engineer", "teacher", "bass player", "people watcher"];

let contactList = [];

function genNum() {
    return Math.floor(Math.random() * 5) ;
}

function Contact() {
    this.name = names[genNum()];
    this.age = ages[genNum()];
    this.occupation = occupations[genNum()];
}

function genData() {
    for (i=0; i<100; i++) {
        let newContact = new Contact();
        contactList.push(newContact);
    }
}

genData();
console.log(contactList);

function genDOMContact(contact) {
    // Create HTML elements (layout template for info)
   let div = document.createElement("div");
   let h3 = document.createElement("h3");
   let h4 = document.createElement("h4");
   let h5 = document.createElement("h5");

   // Set HTML elements = to specific Object.property
   h3.innerHTML = contact.name;
   h4.innerHTML = contact.age;
   h5.innerHTML = contact.occupation;

   // append elements to the div container
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);

    // return div containing info
    return div;
}

let DOMdata = contactList.map(genDOMContact);

// This function takes childDiv and appends to contacts
function appendChildren(childDiv) {
    let contacts = document.getElementById("contacts");
    contacts.appendChild(childDiv);
}

DOMdata.forEach(appendChildren);

