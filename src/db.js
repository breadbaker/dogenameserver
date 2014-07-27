// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var NameSchema = mongoose.Schema({
    name: String,
    dogeHash: String,
    description: String
});

var NameRecord = mongoose.model('NameRecord', NameSchema);



