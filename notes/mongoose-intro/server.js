const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Food = require('./models/food')

mongoose.connect("monbgodb://localhost/food", (err) => {
    if (err) throw err;
    console.log("Connected to the database")
})


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})