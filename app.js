var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/ejs',function(req,res){
    res.render('index')
});

app.post('/ejs',function(req,res){
    res.redirect('/ejs');   // get
});

app.listen(3000);