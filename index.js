var express = require('express');
var app = express();




app.get('/check', function(req, res){
  res.send('check');
});

var saveName = require('./src/saveName');

app.get('/saveName', saveName);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});