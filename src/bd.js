import mongodb from 'mongodb';

let mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/', {
    useUnifiedTopology: true
})

mongoClient.connect(async function(error, mongo){
if (!error){
    let db = mongo.db('test');
    let coll = db.collection('countries');

    let res = await coll.find().toArray();
} else {
    console.error(err)
}
});

