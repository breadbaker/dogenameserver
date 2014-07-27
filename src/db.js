// getting-started.js
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var NameSchema = mongoose.Schema({
    name: String,
    dogeHash: String,
    description: String
});

NameRecord = mongoose.model('NameRecord', NameSchema);


