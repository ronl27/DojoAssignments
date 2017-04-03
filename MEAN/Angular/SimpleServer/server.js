var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 8000;

//set an enviornment var called APPROOT to keep track of the root folder of the app.
process.env['APPROOT'] = __dirname;

//require mongoose configuraton, use path.join to build the routes
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuraton, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);
//create the server
app.listen(port, function(){
  console.log('Running on port 8000: Simple Server')
});
