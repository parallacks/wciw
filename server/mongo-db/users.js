const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'wciwDB'

const assert = require('assert')

const default_pref = {
    netflix: true,
    hulu: true,
    prime: true,
    hbo: true,
    vudu: true,
    disney: true,
    google: true,
    youtube: true,
    verizon: true,
    itunes: true,
    tubi: true,
    fandango: true
}

module.exports = {
    insert_user: function(user) {
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
           
            const db = client.db(dbName);
            const collection = db.collection('user')
            user.preferences = default_pref
            collection.insertOne(user)
            
            client.close();
          });
          return {
              code:200,
              user: user
          }
    },
    login: function(user) {
        return new Promise ((resolve, reject) => {
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log('connected to server');

                const db = client.db(dbName);
                const collection = db.collection('user')
                // console.log(collection.find())
                collection.find({$and: [{'username': user.username}, {'password': user.password}]}).toArray(function(err, result){
                    client.close()
                    console.log(result)
                    resolve( result[0])
                })
            });
        });
            // client.close();
            // // console.log(user_rec)
            // return user_rec
        
        
    },
    update_preferences: function(body) {
        return new Promise ((resolve, reject) => {
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected successfully to server");

                const db = client.db(dbName);
                const collection = db.collection('user');
                console.log(body)
                collection.updateOne({'username': body.username}, {$set: {'preferences': body.preferences}})
                collection.find({'username': body.username}).toArray(function(err, result){
                    client.close();
                    console.log(result)
                    resolve(result[0])
                })
            })
        })
    }
}