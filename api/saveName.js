require('./db');

var check = require('./checkName');
module.exports = function (req, res) {
    var name = req.body.name
    check(name, function (found) {
        if (found) {
            res.send('taken');
        } else {
            var nameRecord = new NameRecord({ 
                name: name, 
                dogeHash: req.body.dogeHash
             });
            nameRecord.save(function (err, fluffy) {
              if (err) {
                return res.send('error');
                } else {
                    res.send(nameRecord);
                }
            });
        }
    });
};

