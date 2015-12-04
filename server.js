var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var attendees = ['Tom'];

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/js'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(1337, function () {
    console.log('Server listening on 1337');
});

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/attendees', function (req, res, next) {
    res.send(attendees);
});

app.post('/attendees', function (req, res, next) {
    attendees.push(req.body.name);
    res.send(attendees);
});