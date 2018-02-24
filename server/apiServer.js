//import dependencies
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose=require('mongoose')
mongoose.Promise=require('bluebird')


//create an express instance 
var app = express();

//use bodyparser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//logger
app.use(logger('dev'))

// middleware for adding headers to routes 
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "http://localhost:9000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

//loading up all app's routes
require('./routes/index.js')(app);

//connecting to the mongoDB
mongoose.connect('mongodb://localhost/projectmanagementappdb',
	{promiseLibrary:require('bluebird')})
    .then(()=>console.log('connection successful'))
    .catch((err)=> console.error(err))

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app
