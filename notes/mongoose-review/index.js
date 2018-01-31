const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const ismsRouter = require("./routes/isms.js")

const app = express()

// middleware before routes!!
app.use(bodyParser.json())

app.use("/isms", ismsRouter)

mongoose.connect("mongodb://localhost:27017", () => {
    console.log('Connected to MongoDB')
})


app.listen(5050, () => {
    console.log('Connected to port 5050')
})

// nodemon 