require('./db');

var check = require('./checkName');
module.exports = function (req, res) {
    var name = req.query.name;
    check(name, function (found) {
        if (found) {
            if (found.confirmed) {
                res.send('confirmed');
            } else {
                res.send('pending');
            }
        } else {
            res.send('not found');
        }
    });
};

