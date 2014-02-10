var express = require("express"),
    logfmt = require("logfmt"),
    http = require("http");

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 5000);
  app.set('View Engine', 'jade');
  app.set('views', __dirname + '/views')

  app.use(logfmt.requestLogger());

  // Middleware
  app.use(express.bodyParser());
  //app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/css'));
  app.use(express.static(__dirname + '/fonts'));
  app.use(express.static(__dirname + '/img'));

  
  app.use(express.static(__dirname + '/bower_components'));
  app.use(express.static(__dirname + '/js'));
  app.use(express.static(__dirname + '/lib'));
});

app.get('/', function (req, res) {
  res.render('index.jade');
});


http.createServer(app).listen(app.get('port'), function(req, res) {
  console.log('Listening on ' + app.get('port'));
});