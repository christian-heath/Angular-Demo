var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const flash = require('express-flash');
const session = require('express-session');
mongoose.connect('mongodb://localhost/27017');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: 'itsasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
}))


app.get('/', function (req, res) {
    res.render('index')
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})