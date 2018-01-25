const express = require('express')
const bountyRoute = express.Router();

const database = require('../database')


//Blockchain - all requests to a specific endpoint belong together
bountyRoute.route("/")
.get((req,res) => {
    res.send(database)
})


module.exports = bountyRoute;