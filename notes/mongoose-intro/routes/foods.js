const express = require("express")
const foodRoutes = express.Router()
const Food = require('../models/food')

foodRoutes.get("/", (req, res) => {
    const query = {} // empty object allows anything to be queried, if no instructions for how to route query below, will return everything.
    if (req.query.isVegan) {
        query.isVegan = req.query.isVegan;
    }

    Food.find((err, foods) => {
        if (err) return res.status(500).send(err);
        return res.send(foods)
    })
})
foodRoutes.post("/", (req, res) => {
    const newFood = newFood.require.body 
    if(err) return res.status(500).send(err)
    return res.send(newFood)
})


foodRoutes.get("/:id", (req, res) => {
    Food.findById(req.params.id, (err, food) => {
        if(err) return res.status(500).send(err)
        return res.send(food)
    })
})

// must npm i -S body-parser to use .body
// {new: true} means that the new info will be returned to the user, default is to return prev info
foodRoutes.put("/:id", (req, res) => {
   Food.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFood) => {
       if (err) return res.status(500).send(err);
       return res.send(updatedFood)
   })
})

foodRoutes.delete("/:id", (req, res) => {
    Food.findByIdAndRemove(req.params.id, (err, food) => {
        if (err) return res.status(500).send(err)
        return res.send(food)
    })
})

module.exports = foodRoutes