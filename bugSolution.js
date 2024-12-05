```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//Correctly update string field using $set
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{field2:"abc"}});
```