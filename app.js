// Setting up express
var express = require('express');
var bodyParser = require('body-parser');
// const cookieSession = require('cookie-session'); // for cookies
// const keys = require('./config/keys'); // for cookies
// const passport = require('passport');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req,res) => {
    res.send("hello world");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(req,res){
    console.log('Express listening on port 5000');
});