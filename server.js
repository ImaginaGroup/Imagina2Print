// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');



// set our port
var port = process.env.PORT || 3000;

//set up mongoose, assume locally installed
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/RESTServer');

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

//utilizamos el Middleware bodyParser para permitir diferentes formatos de peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // para soportar cuerpos de formatos JSON


//Routes API
var router = express.Router();
app.use('/', router);
require('./app/routes')(router); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);
console.log("Aplicación ejecutandose en http://localhost:3000");

// expose app
exports = module.exports = app;
