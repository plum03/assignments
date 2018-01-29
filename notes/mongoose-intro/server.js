const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("monbgodb://localhost/food", (err) => {
    if (err) throw err;
    console.log("Connected to the database")
})

// This route will only be used when the endpoint contains /food
app.use("/food", require("./routes/foods"))


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})


// This object would usually be created in the GET request, not in the server file ... 
// const Food = require('./models/food')
// const pizza = new Food({
//     name: "BBQ Chicken"
// })

// pizza.save((err) => {
//     if (err) return console.log(err)
//     console.log(pizza)
// })