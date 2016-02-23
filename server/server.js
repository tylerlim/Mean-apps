'use strict';

var path = require('path');

// Express Related Library
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var browserify = require('connect-browserify');

// Passport Library
var passport = require('passport');

// App middleware setting
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'keyboard cat'}));

// Start application
var port = process.env.PORT || 8080;
app.listen(port);

console.log('Magic happens on port ' + port);
