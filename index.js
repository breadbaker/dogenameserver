var express = require('express');
var app = express();
app.use(express.bodyParser());

var check = require('./api/checkName');

app.get('/check', function (req, res) {
    check(req.query.name, function (result) {
      if ( result) {
        res.send(result);
      } else {
        res.send('open');
      }
    });
});

app.post('/query', require('./api/queryName'));

app.get('/confirm', require('./api/confirm'));

app.post('/saveName', require('./api/saveName'));

app.get('/register', function(req, res) {
  res.sendfile(__dirname + '/pages/register.html');
});

app.get('/help', function(req, res) {
  res.sendfile(__dirname + '/pages/help.html');
});
app.get('/css/moolah.css', function(req, res) {
  res.sendfile(__dirname + '/css/moolah.css');
});

app.get('/moolah', function(req, res) {
  res.sendfile(__dirname + '/pages/moolah.html');
});

app.get('/policy', function(req, res) {
  res.sendfile(__dirname + '/pages/policy.html');
});

app.get('/help', function(req, res) {
  res.sendfile(__dirname + '/pages/help.html');
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/pages/check.html');
});

var port = Number(process.env.PORT || 5000);
console.log('port', port);
app.listen(port, function() {
  console.log("Listening on " + port);
});