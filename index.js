require('newrelic');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/newrelic', function (req, res) {
    res.send('Hello New Relic!');
});

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});