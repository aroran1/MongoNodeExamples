# MongoNodeExamples

This repository shows some examples of using Mongo Database with Node.

For these examples to work you need have MongoDB, Node and mongodb npm installed. Run 'mongod' and 'mongodb' in your terminal to make sure its connected.

'mongodb.js' shows how to make connection with your mongo database via node. In your terminal if your run 'node mongodb.js' command from the working directory will show the consoled message 'Connected tomongodb://localhost:27017/fruits'.

'insert.js' makes the connection to the database named 'fruits' and inserts couple of documents named 'doc1' and 'doc2' into mongo database that have collection named 'apples'. Run 'node insert.js' in your terminal from the working directory will log consoled messages to show connection and documents inserted message 'Connected to mongodb://localhost:27017/fruits' and '%d docs inserted 2'.

'find.js' finds the array of documents added into the fruits database. In another terminal if you run mongo commands 'use fruits' and 'db.apples.find().pretty()' will show you the documents you have added into your database.

'update.js' updates the value of a document which already exist in the database. and logs the 'Update successful!' message in your terminal when you run this file. In another terminal if you run 'node find.js' command will show you the updated database.

'remove.js' removes a document from the database when you run this file and confirms the removal with '{"n":1,"ok":1}' message. If you run 'node find.js' in another terminal will only show you 1 document now.
