document.getElementById("btn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = "test";
    document.getElementById("list").appendChild(li); 
});

// let localStorage = {
//     setItem: function(key, value) {
//         this[key] = value;
//     },
//     getItem: function(key) {
//         return this[key];
//     }
// };

// localStorage.setItem("token", "adkjsfo9we0iljsfjsfj");
// // key and value can be set to any value you like
// localStorage.setItem("monkeyjuice", "stuff");

// console.log(localStorage.getItem("monkeyjuice"));

localStorage.setItem("myFavNum", "is not a number");
localStorage.setItem("contact", JSON.stringify(["ben", "amy", "chris"]));
console.log(typeof JSON.parse(localStorage.getItem("contacts")));

let cartView = document.getElementById("cartView");

let cucBtn = document.getElementById("cucumber");
let salsaBtn = document.getElementById("salsa");
let milkBtn = document.getElementById("milk");
let beerBtn = document.getElementById("beer");


let cart = JSON.parse(localStorage.getItem("cart")) || [];
// JSON parse takes string and turns back into an array\

function appendLi(name) {
    let li = document.createElement("li");
    li.innerHTML = name;
    cartView.appendChild(li);
}

cart.forEach(appendLi); // run each item in cart through the appendLi function


function addToCart(event) {
    cart.push(event.target.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    // JSON stringify turns array into string
    appendLi(event.target.name);
}

cucBtn.onclick = addToCart;
salsaBtn.onclick = addToCart;
milkBtn.onclick = addToCart;
beerBtn.onclick = addToCart;