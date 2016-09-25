var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

require('./app/config/socialConfig')(passport);
require('./app/routes/user.server.routes')(app, passport);


app.get('/', function() {
	res.sendFile('index.html')
})