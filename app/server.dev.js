var express = require("express"),
    logfmt = require("logfmt"),
    http = require("http");

var app = express();

app.configure(function () {
  console.log('Starting application, root=' + __dirname);

  app.set('port', process.env.PORT || 5000);
  app.set('View Engine', 'jade');
  app.set('views', __dirname + '/views');
  
  // Middleware
  app.use(logfmt.requestLogger());
  app.use(express.json());
  //app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
  console.log('router');
  res.render('index.jade');
});


http.createServer(app).listen(app.get('port'), function(req, res) {
  console.log('Listening on ' + app.get('port'));
});