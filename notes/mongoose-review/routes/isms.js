const express = require('express')
const ismsRouter = express.Router()
const ismModel = require('../models/isms')

ismsRouter.route("/")
    // add new vote
    .post((req, res) => {
        let newIsm = new ismModel(req.body);
        newIsm.save((err, savedIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedIsm)
            }
        })
    })
    // return all votes
    .get((req, res) => {
        // the result of .find() is always an array
        ismModel.find(req.query, (err, foundIsms) => {
            if(err) {
                console.error(err)
            } else {
                res.send(foundIsms)
            }
        })
    });


ismsRouter.route('./:id')
    .get((req, res) => {
        let {id} = req.params
        // findOne() returns an object
        ismModel.findOne({_id: id},(err, foundIsm) => {
            if(err) {
                console.error(err)
            } else {
                res.send(foundIsm)
            }
        })
    })

    .delete((req, res) => {
        let {id} = req.params
        ismModel.findByIdAndRemove(id, (err, removeIsm) => {
            if(err) {
                console.error(err)
            } else {
                res.send(removeIsm)
            }
        })
    })

    .put((req, res) => {
        let {id} = req.params
        ismModel.findByIdAndUpdate(id, req.body, {new:true}, (err, updatedIsm) => {
            if (err) {
                console.error(err)
            } else {
                res.send(updatedIsm)
            }
        })
    })



module.exports = ismsRouter