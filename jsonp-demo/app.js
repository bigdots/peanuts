//入口文件


var express = require("express");
var path = require('path');
var swig = require('swig');
var urlLib = require('url'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// 设置路由
app.get("/",function(req,res){
    res.render('index', { title: 'Express' });
})

// 模拟数据
var data = {"brand":23}

// 设置接口
app.get("/index.json",function(req,res){
    var param = urlLib.parse(req.url,true);
    var returnValue = param.query.callback+ '(' + JSON.stringify(data)+')'
    //将结果返回客户端
    res.send(returnValue)
})


app.listen(3000,function(){
    console.log("app is listening")
})