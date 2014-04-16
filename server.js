// set up ======================================================================
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb

// config files =======================================================
var database = require('./config/db'); // load the database config
var port = process.env.PORT || 8080; // set the port

// configuration ===============================================================

// connect to mongoDB database
mongoose.connect(database.url, function(err, res) {
    if (err) { 
    console.log ('ERROR connecting to: ' + database.url + '. ' + err);
    } else {
    console.log ('Succeeded connecting to: ' + database.url);
    }
});

app.configure(function() {
    app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.bodyParser()); // pull information from html in POST
    app.use(express.methodOverride()); // simulate DELETE and PUT
});

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
console.log(process.env.MONGOLAB_URI);
console.log(process.env.MONGOHQ_URL);