// api/options.js
//se importa el modelo options de la base de datos
var Options = require('../models/option');


module.exports.addOptions = function(req,res) {
  //se crea el registro del modelo con los parámetros pasados por la petición
    var options = new Options(req.body.options);
    console.log('Opciones'+options);
    //Y se guardan en la base de datos
    options.save()
};
