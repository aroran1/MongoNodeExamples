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

    collection.find().toArray(function(err, res){
      if(err) {
        console.log(err);
      } else if(res.length) {
        console.log(res);
      } else {
        console.log('No matches foune!');
      }
      db.close();
    })
  }
});

// Terminal reults
//
//
// Terminal 1
// Nidhis-MacBook-Pro:MongoNode nidhiarora$ node find.js
// Connected to mongodb://localhost:27017/fruits
// [ { _id: 593828f4d49e220bd191c6ef,
//     name: 'red apples',
//     color: 'red' },
//   { _id: 593828f4d49e220bd191c6f0,
//     name: 'green apples',
//     color: 'green' } ]
