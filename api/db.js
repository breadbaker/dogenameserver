// getting-started.js
mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/test';


mongoose.connect(mongoUri);

var NameSchema = mongoose.Schema({
    name: String,
    dogeHash: String,
    description: String,
    address: String,
    amountToPay: String,
    timeLeft: String,
    confirmed: Boolean
});

NameRecord = mongoose.model('NameRecord', NameSchema);