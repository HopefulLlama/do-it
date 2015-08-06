var http = require('http');
var express = require('express');

var pkg = require('./package');
var route = pkg.route;
var port = pkg.port;

var app = express();
app.use("/src", express.static(__dirname + '/app'));
app.use("/lib", express.static(__dirname + '/bower_components'));
var server = http.createServer(app);

app.set('port', (process.env.PORT || 5000));

app.get(route, function (req, res) {
  res.sendfile('app/do-it.html');
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});