var express = require('express');
var app = express()

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express My First Project Asik' });
});

module.exports = app;
