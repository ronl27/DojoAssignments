//Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!

//Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.

//Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.

var fs = require ('fs'),
    http = require ('http'),
    port = 8001;


var server = http.createServer (function server (req, res){

//Split the URL in order to examine it better
var splitURL = req.url.split('/'),
    firstHalf = splitURL[1]; //set of characters after the first/


  switch(firstHalf){
    case "stylesheets":
      //Serve css
      serveCSS(splitURL[2], res);
      break;
    case "images":
      //serve a jpg image
      serveJPG(splitURL[2], res);
      break;

    default:
      //SERVE an HTML file
      switch (splitURL[1]) {
        case "cars":
          if(splitURL[2] === "new"){
            serveHTML("index.html", res);
          }else{
            serveHTML("cars.html", res);
          }
          break;
        case "cats":
          serveHTML("cats.html", res);
          break;
        default:
        //Dont recognize this URL, serve a 404
        serve404(res);
      }
    }
});
function serveHTML(file, res){
  //read a particular file
  fs.readFile('views/' + file, 'utf8', function(err, contents){
  //if an error exists
    if(err){ console.log(err); }
  //response to browser
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(contents);
    res.end();
  });
}
function serveCSS(file, res){
  //read a particular file
  fs.readFile('stylesheets/' + file, 'utf8', function(err, contents){
    if (err){ return serve404(res) }
    res.writeHead(200, {'Content-Type' : "text/css"});
    res.write(contents);
    res.end();
  });
}
function serveJPG(file, res){
  fs.readFile('images/' + file, function (err, contents){
    if (err) {return serve404(res) }
    res.writeHead(200, {'Content-Type' : 'images/jpg'});
    res.write(contents);
    res.end();
  });
}
function serve404(res){
  res.writeHead(404);
  res.end("File not found!");
}
server.listen(8001);
console.log("I am running on 8001")
