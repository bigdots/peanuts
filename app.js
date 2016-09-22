//入口文件


var express = require("express");
var path = require('path');
var swig = require('swig');
var urlLib = require('url'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// var swig = new swig.Swig();
// app.engine('html', swig.renderFile);
// app.set('view engine', 'html');

app.get("/",function(req,res){
    res.render('index', { title: 'Express' });
})

var data = {"brand":23}

app.get("/index.json",function(req,res){
    var param = urlLib.parse(req.url,true);
    var returnvalue = param.query.callback+ '(' + JSON.stringify(data) +')' ;
    console.log(param.query)
    res.send(returnvalue)
})


app.listen(3000,function(){
    console.log("app is listening")
})