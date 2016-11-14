var gzippo = require('gzippo');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname)));

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/build"));
// app.listen(process.env.PORT || 5000);

server.listen(port, function() {
    console.log("App is running on port " + port);
});
