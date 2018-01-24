// STEP 1: after installing express, import into file console.log(express)
// express is a constructor function which generates an interface must call w/
// trailing ()
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const db = require('./db');

// STEP 2: connect express to app to create app interface
const app = express();
// console.log(app) STEP 3: define port to use
let port = 5050

// middleware (for use w/ post request)
app.use(bodyParser.json());

// routes

// write instructions to take requests request endpoint (i.e. "/myserver" placed
// w/in (" ")
app.get("/myserver", (request, response) => {
    // console.log("Congratulations, You WIN!!") console.log(response)
    response.send("I'm a SERVER!!")
    response.send(JSON.stringify(request))
});

app.get("/db", (req, res) => {
    // console.log(req.query);
    // assign variable (e.g. query) to the req.query object (to be used in for-in loop below)
    let query = req.query;
    let filteredDb = db.filter((dbItem) => {
        let found = true;
        // for-in loop
        for (let key in query) { 
            // use single = here to avoid query issues with string/number data types not matching, false negative
            if(dbItem[key] != query[key]) {
                found = false;
                break;
            }
        }
        return found
    })
    res.send(filteredDb)
});

app.get("/db/:id", (req, res) => {
    let {id} = req.params
    let found = false
    let foundDb;
    for (let i = 0; i<db.length; i++) {
        if(db[i]._id === id) {
            found = true; 
            foundDb = db[i]
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was found`,
            data: foundDb
        })
    } else {
        res.send({
            msg: `Item ${id} not found`
        })
    }
})


app.post("/db", (req, res) => {
    let newItem = req.body;
    newItem._id = uuid(); // generates unique id
    db.push(newItem);
    // console.log(db.push(req.body))
    res.send({msg: "Data added successfully", data: newItem});
});

app.delete("/db/:id", (req, res) => {
    // console.log(req.params)
    let {id} = req.params;
    let found = false;
    // db = db.filter((coin) => coin._id !== id);
    for (let i = 0; i < db.length; i++) {
        if (db[i]._id === id) {
            db.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({msg: `Item ${id} was successfully removed`})
    } else {
        res.send({msg: `Item ${id} was not found`})
    }

});


app.put("/db/:id", (req, res) => {
    let { id } = req.params
    let updatedDb = req.body;
    let found = false
    for (let i=0; i<db.length; i++) {
        if (db[i]._id === id) {
            db[i] = Object.assign(db[i], updatedDb);
            updatedDb = db[i];
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was updated`
        })
    } else {
        res.send({
            msg: `Item ${id} not found`
        })
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port)
});
