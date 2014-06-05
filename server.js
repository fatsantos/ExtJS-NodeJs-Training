var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

// define location fo static files
var staticDir = __dirname + '/static';



app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

//Create
app.post('/app/users',function(req,res){
	res.send(req.method + ' by fat');
});

//Read
app.get('/app/users',function(req,res){
	if (req.query.filter){
		res.send('List of users matching '+ req.query.filter + ' by fat');
	} else {
		res.send(req.method + ' by fat');
	}
});

app.get('/app/users/:id',function(req,res){
	res.send(req.method + ' 1 user with ID= ' + req.params.id + ' by fat');
	console.log(req);
});

//Update
app.put('/app/users',function(req,res){
	res.send(req.method + ' by fat');
});

//Delete
app.delete('/app/users',function(req,res){
	res.send(req.method + ' by fat');
});

app.get('/',function(req,res) {
	res.send(__dirname);
});

app.post('/static',function(req,res){
	res.send(req.body.firstName+' '+req.body.lastName);
});

app.post('/user/add',function(req,res){
	res.send('Ok');
});
/// catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



/// error handlers
app.listen(8080, function(){
	console.log('Listening on port %d', 8080);
});


module.exports = app;
