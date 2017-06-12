var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, function(err, db){
  if(err){
    console.log(err);
  } else {
    // In your terminal when you run this file as 'node mongodb.js' will log below message
    console.log('Connected to ' + url);

    var collection = db.collection('apples');

    var doc1 = {name: 'red apples', color: 'red'};
    var doc2 = {name: 'green apples', color: 'green'};

    collection.insert([doc1, doc2], function(err, res){
      if(err){
        console.log(err);
      } else {
        console.log('%d docs inserted ' + res.insertedCount);
      }
      db.close();
    });
  }
});

// Terminal reults
//
//
// Terminal 1
// Nidhis-MacBook-Pro:MongoNode nidhiarora$ node insert.js
// Connected to mongodb://localhost:27017/fruits
// %d docs inserted 2
//
//
// Terminal 2
// run mongo from the project folder
// >use fruits
// switched to db fruits
// > db.apples.find().pretty()
// {
// 	"_id" : ObjectId("593828f4d49e220bd191c6ef"),
// 	"name" : "red apples",
// 	"color" : "red"
// }
// {
// 	"_id" : ObjectId("593828f4d49e220bd191c6f0"),
// 	"name" : "green apples",
// 	"color" : "green"
// }
