require('./db');

// var check = require('./checkName');

module.exports = function (req, res) {

    // check(req.query.name, function (found) {
    //     if (found)
    // })

     var query = NameRecord.find({'name': req.query.name}); // (ok in this example, it's all entries)

      query.exec(function(err, result) {
        if (err) {
            res.send('error');
        } else if (result.length) {
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


