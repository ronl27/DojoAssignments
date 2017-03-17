//call out dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

//set up bodyParser to parse form Data
app.use(bodyParser.urlencoded());

//set up conncections to server
app.listen (port, function(){
  console.log('Running on 8000: quoting_dojo')
});

mongoose.connect('mongodb://localhost/quoting_dojo', function(err,db){
  if (err){
    console.log("Error connecting")
    console.log(err);
  }
});

//create Schema(db)
var Schema = mongoose.Schema;
//create Quote Schema(db)
var QuoteSchema = new mongoose.Schema({
  name:{type: String},
  quote:{type: String},
});

//create variable for Quote
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

//direct server to views folder
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs')

//set routes:
// '/' index route (homepage)
app.get ('/', function(req, res){
  res.render('welcome.ejs')
});
//to obtain the quotes by the users
app.get('/quotes', function (req, res){
  Quote.find({}, function(err, results){
    if (err){
      console.log(err)
    } else {
      console.log("Retrieved quote")
      res.render('quotes.ejs', {quotes: results});
    }
  });
});
//create a new quote
app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err){
      console.log(err)
    } else {
      console.log("Quote added")
      res.redirect('/quotes')
    }
  });
});
