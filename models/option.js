// models/quote.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OptionsSchema = new Schema({

    color: String,
    tamano: String,
    configuracion: String,
    margenes: String,
});


module.exports = mongoose.model('Option', OptionsSchema);
