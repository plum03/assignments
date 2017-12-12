var shopper = {
    name: "Jane",
    age: 28,
    isRewardsMember: true,
    signUp: function() {
        if(this.isRewardsMember === true) {
            console.log("Welcome back " +this.name)
        }
        else {
            console.log("Would you like to join our Rewards Program?");
        }
    },
    cart: ["milk", "bread", "apples"]
}
shopper.signUp();
console.log(shopper.cart);