var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, function(err, db){
  if(err){
    console.log(err);
  } else {
    // In your terminal when you run this file as 'node mongodb.js' will log below message
    console.log('Connected to ' + url);
    db.close();
  }
});



// Terminal reults
//
//
// Terminal 1
// Nidhis-MacBook-Pro:MongoNode nidhiarora$ node mongodb.js
// Connected tomongodb://localhost:27017/fruits
