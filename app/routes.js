// app/routes.js

 var options = require('../api/options');
 module.exports = function(router) {
        router.route('/options').post(function(req, res) {
          console.log(req.body);
          options.addOptions(req,res);
        })
        router.route('*').get(function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file

        });

};
