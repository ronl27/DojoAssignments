//MODELS AND CONTROLLERS
// call dependencies
var express = require ("express");
var mongoose = require ("mongoose");
var path = require ("path");
var bodyParser = require ("body-parser");
var app = express();
var port = 8001;

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './static')));

//create your Schema(DB)
var Schema = mongoose.Schema;
//Message Collection (Table)
var MessageSchema = new mongoose.Schema({
  name: {type: String},
  message: {type: String},
  _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});
//Validation to see if the user filled in the field.
MessageSchema.path('name').required(true, "Name cannot be blank");
MessageSchema.path('message').required(true, "Message cannot be blank");
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

//Comment Collection (Table)
var CommentSchema = new mongoose.Schema({
  name: {type: String},
  comment: {type: String},
  _message:{type: Schema.Types.ObjectId, ref: "Message"}
});
//Validation to see if the user filled in the field.
CommentSchema.path('name').required(true, "Name cannot be blank");
CommentSchema.path('comment').required(true, "Comment cannot be blank");
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

//Route server.js to folders of ejs and what engine we are using
app.set ("views", path.join(__dirname, "./views"));
app.set ("view engine", "ejs");

//ROUTES w/ logic.
app.get("/", function(req, res){
  //message will only find one item due to .findOne
  Message.find({})
  .populate('_comments')
  .exec(function(err, message){
    res.render('index.ejs', {messages: message})
  });
});

//When filling out the message portion of the page
app.post("/message", function(req, res){
  console.log("Post /message/ route") //used to make sure i am accessing this portion
  var newMessage = new Message ({name: req.body.name, message: req.body.message});
//Using .save as we are passing data w/ an _id
  newMessage.save(function(err){
    if (err) {
      console.log(err);
      res.render('index.ejs', {errors: newMessage.errors});
    } else {
      console.log("success");
      res.redirect ('/');
    }
  })
})

//When filling out the comment portion of the page
app.post("/comment/:id", function(req, res){
  console.log("Post /comment/ route") //used to make sure i am accessing this portion
  var message_id = req.params.id;
  //Creating a comment to a particular message
  Message.findOne({_id: message_id}, function(err, message){
    var newComment = new Comment({name: req.body.name, comment: req.body.comment});

    newComment._message = message._id;
    //update the message with the creation of a new comment that will be pushed
    Message.update({_id: message_id}, {$push:{"_comments": newComment}}, function(err){
    });
//Using .save as we are passing data w/ an _id
    newComment.save(function(err){
      if (err){
        console.log(err);
        res.render('index.ejs', {errors: newComment.errors});
      } else {
        consolße.log("comment added")
        res.redirect('/');
      }
    });
  });
});
//let the server know which port to listen to
app.listen(port, function(){
  console.log("Running on port: 8001: messageboard")
});
//to conntect to the specfic port
mongoose.connect('mongodb://localhost/messageboard', function(err, db){
  if (err){
    console.log("Error in connect");
    console.log(err);
  }
});
mongoose.Promise = global.Promise;
