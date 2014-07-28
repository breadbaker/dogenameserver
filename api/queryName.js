var pay = require('./pay');


require('./db');

var confirm = function (nameRecord, tries) {
    if (tries < 1) {
        NameRecord.remove({ _id: nameRecord.id }, function(err) {
        });
        return;
    }
    setTimeout( function () {
        pay.checkPaid(nameRecord.name, function (err, response) {
            if (response.data.confirmed_received - nameRecord.amountToPay < 2) {
                nameRecord.confirmed = true;
                nameRecord.save();
            } else {
                confirm(nameRecord, tries -1);
            }
        });
    }, 5 * 1000);

};

var check = require('./checkName');
module.exports = function (req, res) {
    var name = req.body.name;
    check(name, function (found) {
        if (found) {
            res.send('taken');
        } else {
            pay.getAddr(name, function (err, response) {
                if (err) {
                    res.send('error');
                    return;
                }
                var amount = 100;

                var nameRecord = new NameRecord({ 
                    name: name, 
                    dogeHash: req.body.dogeHash,
                    description: req.body.description,
                    address: response.data.address,
                    amountToPay: amount,
                    timeLeft: 30 * 1000 * 10
                });

                nameRecord.save(function (err, fluffy) {
                  if (err) {
                    return res.send('error');
                    } else {
                        confirm(nameRecord, 200);
                        res.send({
                            address: response.data.address,
                            amount: amount
                        });
                    }
                });




            });


 

        }
    });
};

