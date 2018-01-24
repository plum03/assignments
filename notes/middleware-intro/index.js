const express = require('express')
let database = require('./database')
let logger = require('./logger')
let size = require('./size')

// creates interface
const app = express();
let port = 8080;

app.use(logger);
app.use(size(database)); // size is a wrapper function that returns a middleware
app.use(bodyParser.json()) // bodyParser is an object , json() is a function

app.get("/", (req, res) => {
    res.send({
        data: database,
        size: res.size
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
