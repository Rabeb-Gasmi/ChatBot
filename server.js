
var express = require('express');
var ejs =require('ejs');


var app = express();


app.use(express.static('public'));
app.set('view engine','ejs');



app.get('/',function(req,res,next){

res.render("pages/index");

})
app.get('/about',function(req,res,next){
    res.render("pages/about");
})
app.get('/contact',function(req,res,next){
    res.render("pages/contact");
})


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

