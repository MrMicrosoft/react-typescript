var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require('body-parser');
var moment = require('moment');
var cors = require('cors');

//mongoose instance connection url connection

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser());

app.use(function(req, res, next){
    console.log("BEGIN ["+req.method+"] ("+moment().format("YYYY-MM-DD, HH:mm:ss")+") Requested URL: "+req.originalUrl);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, PUT, DELETE");
    next();
});

var routes = require('./routes/TodoRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('RESTful API server started on: ' + port);