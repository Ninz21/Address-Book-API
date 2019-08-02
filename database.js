var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
const database = {db:null}

const client = new MongoClient(url)


client.connect(function(err,db){
    if (err) {
        console.log(err);
        throw err;
    }
    // console.log(db.dbName)
    database.db = client.db("Record");

    console.log("Connected to Database!");

});
 


module.exports = database;