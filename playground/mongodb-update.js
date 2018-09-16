//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b9d9b79b44163a468fe9fc7')
    },
        {
            $set: {
                name: 'Shantanu'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        },
        (err, result) => {
            if (err) {
                return console.log('Could not find and update the Todo item.', err);
            }
            console.log(result);
        });

    client.close();
});