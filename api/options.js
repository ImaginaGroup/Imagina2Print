// api/quote.js

var Options = require('../models/option');

module.exports.getAllOptions = function(req, res) {
    Options.find(function(err, options) {
        if (err) {
            res.send(err);
        }
        res.send({data: options});
    });
};

module.exports.addOptions = function(req,res) {
    var options = new Options(req.body.options);
    options.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.send({data:options});
    });
};
