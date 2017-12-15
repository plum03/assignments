function add(x,y) {
    console.log(z);
    if(typeof x !== "number" || typeof z !== "number") {
        // throw new InputError();
        throw new Error("Invalid Input");
    }
    return x + y;
}

try{
    console.log(add(2,"5"));
} catch(err) {
    console.log(err.type);
}

function InputError() {
    Error.call(this);
this.type = "input error";
this.message = "Input must be a number";
}