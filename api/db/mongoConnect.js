const mongoose = require('mongoose');

module.exports = function(mongoURL) {
    //connect to MongoDB
    var db  = mongoose.createConnection(mongoURL);

    var currentState = db.open().ended;


    if (currentState !== false) {
        db.on('error', function(err) {
            if (err) {
                console.log('Database Connection' + err);
            }
        });

        db.once('open', function() {
            console.log('Database Connection Successful...');
        });
    } else {
      console.log('Database Connection Established...');
    }
}
