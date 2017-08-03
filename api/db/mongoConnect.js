const mongoose = require('mongoose');
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.red;
const success = chalk.blueBright.bgWhite;

module.exports = function(mongoURL) {
    //connect to MongoDB
    //mongoose.createConnection(mongoURL);
    var db = mongoose.createConnection(mongoURL);

    var currentState = db._closeCalled;

    if (currentState !== false) {
        db.on('error', function(err) {
            if (err) {
                log(error('Database Connection') + err);
            }
        });

        db.once('open', function() {
            log(success('Database Connection Successful.../'));
        });
    } else {
        log(success('Database Connection Established.../'));
    }

    return db;
}
