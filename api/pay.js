var BlockIo = require('block_io');
var block_io = new BlockIo(process.env.DOGE_KEY);

var pay = {
    getAddr: function (name, callBack) {
        block_io.get_new_address({'label': name}, callBack);
    },
    checkPaid: function (name, callBack) {
        block_io.get_address_received({'label': name}, callBack);
    }
};

module.exports = pay;