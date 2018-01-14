const redux = require("redux");

let erica = {
    id: "1",
    name: "Erica",
    email: "somethingfunny@email.com"
}

// STEP 1: Make reducer function
// these are examples of "PURE functions"
// 2 Requirements of Pure functions:
// 1) for every input, there is exactly one output that is the same each time
// 2) cannot affect anything outside of its scope
function contacts (prevContacts = [], action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return [...prevContacts, action.contact];
        case "DELETE_CONTACT":
            let newContacts = [...prevContacts];
            return newContacts.filter((contact) => {
                return action.id !== contact.id;
            })
        case "EDIT_CONTACT":
            let updatedContacts = [...prevContacts];
            return updatedContacts.map((contact) => {
                if(contact.id === action.id) {
                    return Object.assign(contact, action.contact); 
                } else {
                    return contact;
                }
            })
            return
        default:
            return prevContacts;
    }
}

// create store from reducer
let store = redux.createStore(redux.combineReducers({ contacts }));

// show state every time it changes
store.subscribe(() => {
    console.log(store.getState());
})

// action creators (return type and payload)
// return 'actions' which are objects with a type property and payload (info about the object)

function addContact (contact) {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

function deleteContact (id) {
    return {
    type: "DELETE_CONTACT",
    id
}
}

function updateContact (id, contact) {
    return { 
    type: "UPDATE_CONTACT",
    id,
    contact
    }
}

store.dispatch(addContact({
    id: 0,
    name: "Erica"
}));

store.dispatch(addContact({
    id: 1,
    name: "Emmalee"
}));
store.dispatch(addContact({
    id: 2,
    name: "Tyler"
}));

store.dispatch(deleteContact(1));

store.dispatch(updateContact(0, {
    name: "Jenna",
    email: "somethingboring@email.com",
    dob: "3/13"
}));
// let contacts = (prevState = [], action) => {
//     switch(action.type) {
//         case "ADD_CONTACT":
//             return [...prevState, action];
//         case "REMOVE_CONTACT":
            
//         default:
//             return [...prevState];
//     }
// }

// function addContact (contact) {
//     return {
//         type: "ADD_CONTACT",
//         contact
//     }
// }

// function removeContact (contact) {
//     return {
//         type: "DELETE_CONTACT",

//     }
// }


// let store = redux.createStore(redux.combineReducers({contacts}));

