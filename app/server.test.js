var express = require('express'),
    logfmt = require('logfmt'),
    http = require('http'),
    path = require('path'),
    routes = require('./routes');

var app = express();

app.configure(function () {
  console.log('Starting application, root=' + __dirname);

  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('View Engine', 'jade');

  app.use(logfmt.requestLogger());
  app.use(express.json());
  app.use(app.router);

  app.use('/css',express.static(path.join(__dirname, 'public/content/css')));
  app.use('/font',express.static(path.join(__dirname, 'public/content/font')));
  app.use('/img',express.static(path.join(__dirname, 'public/content/img')));
  app.use('/js',express.static(path.join(__dirname, 'public/js')));
});

app.get('/partials/:name', routes.partials);
app.get('/', function (req, res) {
  res.render('index.jade');
});

http.createServer(app).listen(app.get('port'), function(req, res) {
  console.log('Listening on ' + app.get('port'));
});
