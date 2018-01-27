let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/myProject"; // myProject is a placeholder for database name

MongoClient.connect(url, (err, database) => {
    if (err) console.error(err);
    console.log("Database is now Connected");
    // specify db to use
    let db = database.db("myProject");
    // add a collection
    let collection = db.collection("myCollection")

    let ObjectId = require('mongodb').ObjectId

    // insert multiple items at once into db
    // collection.insertMany([{a:1},{b:2},{c:3}], (err, result) => { //need cb function to handle potential error and alert db insert unsuccessful
    //     if (err) console.error(err);
    //     console.log(result);
    // })

    // returns index and _id
    collection.find({}, (err, result) => {
        if (err) console.error(err);
        console.log(result);
    })

    // remove single resource
    collection.deleteOne({ _id: ObjectId("5a6bcd674ba7677aa3fcd9e9")}, (err, result) => {
        if (err) console.error(err);
        console.log(result);
    })
    // close db connection
    database.close();
})