require('./db');

var check = require('./checkName');

module.exports = function (req, res) {

    check(req.query.name, function (found) {
        if (found) {
            res.send('taken');
        } else {
            var nameRecord = new NameRecord({ name: req.query.name });
            nameRecord.save(function (err, fluffy) {
              if (err) {
                return res.send('error');
                } else {
                    res.send('saved');
                }
            });
        }
    });

};


