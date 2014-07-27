// getting-started.js
mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/test';

console.log(process.env);

console.log(process.env.MONGOLAB_URI);

mongoose.connect(mongoUri);

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});

var NameSchema = mongoose.Schema({
    name: String,
    dogeHash: String,
    description: String
});

NameRecord = mongoose.model('NameRecord', NameSchema);


