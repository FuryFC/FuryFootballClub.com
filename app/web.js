var express = require("express"),
    logfmt = require("logfmt"),
    http = require("http");

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 5000);
  app.set('View Engine', 'jade');
  app.set('views', __dirname + '/views')

  

  // Middleware
  app.use(express.directory('css'));
  app.use('css', express.static(__dirname + '/css'));
  app.use('fonts', express.static(__dirname + '/fonts'));
  app.use('img', express.static(__dirname + '/img'));
  app.use('js', express.static(__dirname + '/bower_components'));
  app.use('js', express.static(__dirname + '/js'));
  app.use('js/lib', express.static(__dirname + '/lib'));

  app.use(logfmt.requestLogger());
  app.use(express.bodyParser());
  //app.use(express.methodOverride());
  app.use(app.router);
  
});

app.get('/', function (req, res) {
  res.render('index.jade');
});


http.createServer(app).listen(app.get('port'), function(req, res) {
  console.log('Listening on ' + app.get('port'));
});