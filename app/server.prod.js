<<<<<<< HEAD
var express = require("express"),
    logfmt = require("logfmt"),
    http = require("http");
=======
var express = require('express'),
    logfmt = require('logfmt'),
    http = require('http'),
    path = require('path');
>>>>>>> origin/Development

var app = express();

app.configure(function () {
  console.log('Starting application, root=' + __dirname);

  app.set('port', process.env.PORT || 5000);
<<<<<<< HEAD
  app.set('View Engine', 'jade');
  app.set('views', __dirname + '/views');
  
  // Middleware
  app.use(express.static(__dirname + '/content/css'));
  app.use(express.static(__dirname + '/content/fonts'));
  app.use(express.static(__dirname + '/content/img'));
  app.use(express.static(__dirname + '/js'));

=======
  app.set('views', __dirname + '/views');
  app.set('View Engine', 'jade');
  
>>>>>>> origin/Development
  app.use(logfmt.requestLogger());
  app.use(express.json());
  //app.use(express.methodOverride());
  app.use(app.router);
<<<<<<< HEAD
  
=======


  app.use('/css',express.static(path.join(__dirname, 'public/content/css')));
  app.use('/font',express.static(path.join(__dirname, 'public/content/font')));
  app.use('/img',express.static(path.join(__dirname, 'public/content/img')));
  app.use('/js',express.static(path.join(__dirname, 'public/js')));
>>>>>>> origin/Development
});

app.get('/', function (req, res) {
  console.log('router');
  res.render('index.jade');
});


http.createServer(app).listen(app.get('port'), function(req, res) {
  console.log('Listening on ' + app.get('port'));
});