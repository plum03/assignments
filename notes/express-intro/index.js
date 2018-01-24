// STEP 1: after installing express, import into file console.log(express)
// express is a constructor function which generates an interface must call w/
// trailing ()
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const coinRoute = require('./routes/coins')

const db = require('./db');

// STEP 2: connect express to app to create app interface
const app = express();
// console.log(app) STEP 3: define port to use
let port = 5050

// middleware (for use w/ post request)
app.use(bodyParser.json());

// routes
app.use('/coins', coinRoute)
app.use('blockchains', blockchainRoute)


app.listen(port, () => {
    console.log("Listening on port " + port)
});
