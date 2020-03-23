// Setting up express
var express = require('express');
var bodyParser = require('body-parser');
// const cookieSession = require('cookie-session'); // for cookies
// const keys = require('./config/keys'); // for cookies
// const passport = require('passport');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', (req,res) => {
//     res.send("hello world");
// })

if(process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like our main.js file or main.css file !
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recoginze the route.
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})};

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(req,res){
    console.log('Express listening on port 5000');
});