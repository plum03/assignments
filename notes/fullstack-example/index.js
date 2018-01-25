const express = require("express");
const bodyParser = require('body-parser')
const bountyRoute = require('./routes/bounty')
const config = require('./config') // holds system config vars
const cors = require('cors') // connect client to server

const app = express()

// middleware (MUST go before routes)
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/bounty", bountyRoute);


app.listen(config.port, () => {
    console.log("Listening on port " + config.port)
})

// all requests to a specific endpoint belong together