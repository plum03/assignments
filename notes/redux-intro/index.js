const redux = require("redux");

function count(prevCount = 0, action) {
    switch (action.type) {
        case "CHANGE": 
            return action.amount + prevCount;
        default:
            return prevCount;
    }
}

function names(prevNames = [], action) {
    switch(action.type) {
        case "ADD_NAME":
            return  [...prevNames, action.name]
        default: 
            return prevNames;
    }
}

let store = redux.createStore(redux.combineReducers({ count, names }));


store.subscribe(() => {
    console.log(store.getState());
});

function change(num) {
    return {
        type: "CHANGE",
        amount: num,
    }
}

function addName(name) {
    return {
        type: "ADD_NAME",
        name
    }
}

store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(change(5)); // Adds 5 each time

store.dispatch(addName("Erica"));
store.dispatch(addName("Oliver"));


// let defaultState = {
//     count: count()
// }