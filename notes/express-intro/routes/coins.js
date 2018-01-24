const express = require("express")
const coinRoute = express.Router()

let coins = require('../db')

coinRoute
    .route("/coins")
    .get((req, res) => {
        // console.log(req.query); assign variable (e.g. query) to the req.query object
        // (to be used in for-in loop below)
        let query = req.query;
        let filteredCoins = coins.filter((coin) => {
            let found = true;
            // for-in loop
            for (let key in query) {
                // use single = here to avoid query issues with string/number data types not
                // matching, false negative
                if (coin[key] != query[key]) {
                    found = false;
                    break;
                }
            }
            return found
        })
        res.send(filteredCoins)
    })
    .post((req, res) => {
        let newItem = req.body;
        newItem._id = uuid(); // generates unique id
        coins.push(newItem);
        // console.log(db.push(req.body))
        res.send({msg: "Data added successfully", data: newItem});
    });

coinRoute
    .route("/coins/:id")
    .get((req, res) => {
        let {id} = req.params
        let found = false
        let foundCoins;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                found = true;
                foundCoins = coins[i]
                break;
            }
        }
        if (found) {
            res.send({msg: `Item ${id} was found`, data: foundCoins})
        } else {
            res.send({msg: `Item ${id} not found`})
        }
    })
    .delete((req, res) => {
        // console.log(req.params)
        let {id} = req.params;
        let found = false;
        // db = db.filter((coin) => coin._id !== id);
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins.splice(i, 1);
                found = true;
                break;
            }
        }
        if (found) {
            res.send({msg: `Item ${id} was successfully removed`})
        } else {
            res.send({msg: `Item ${id} was not found`})
        }

    })
    .put((req, res) => {
        let {id} = req.params
        let updatedDb = req.body;
        let found = false
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins[i] = Object.assign(coins[i], updatedDb);
                updatedDb = coins[i];
                found = true;
                break;
            }
        }
        if (found) {
            res.send({msg: `Item ${id} was updated`})
        } else {
            res.send({msg: `Item ${id} not found`})
        }
    })

module.exports = coinRoute;