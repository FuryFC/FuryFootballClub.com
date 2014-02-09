var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.redirect('/app/index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function(req, res) {
  console.log("Listening on " + port);
});