var express = require('express');
var app = express();

app.get('/check', require('./api/checkName'));

app.get('/saveName', require('./api/saveName'));

app.get('/register', function(req, res) {
  res.sendfile(__dirname + '/pages/register.html');
});

app.get('/help', function(req, res) {
  res.sendfile(__dirname + '/pages/help.html');
});

app.get('/policy', function(req, res) {
  res.sendfile(__dirname + '/pages/policy.html');
});

app.get('/help', function(req, res) {
  res.sendfile(__dirname + '/pages/help.html');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});