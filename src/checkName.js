require('./db');




module.exports = function(name, callBack) {

     var query = NameRecord.find({'name': name}); // (ok in this example, it's all entries)

      query.exec(function(err, result) {
        if (err) {
            res.send('error');
        } else if (result.length) {
          callBack(true);
        } else {
            callBack(false);
        }
      });

}