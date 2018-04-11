// Imports
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require routes
// They are yet to be created
const api = require('./routes/api/index');

const DB_USER = 'root';
const DB_PASSWORD = 'root';
const DB_URL = 'ds129342.mlab.com:29342/vue-lyrics';

// Setup an express app
var app = express();
// **************************

// Database connection here
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}`);
// mongoose.connect('mongodb://localhost:27017/mydboverhere');
var db = mongoose.connection;
console.log("Database connection ready");
// ********************

// **************************

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// ********************

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Configure middlewares
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create link to Angular build directory
var distDir = __dirname + "/client/dist/";
console.log(distDir);
app.use(express.static(distDir));

app.use('/api/', api);

// Initialize the app.
// var server = app.listen(process.env.PORT || 3001, function () {
//   var port = server.address().port;
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

module.exports = app;
