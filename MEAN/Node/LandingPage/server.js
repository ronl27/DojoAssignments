// localhost:6789/    This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).

var fs = require ('fs'),
    http = require('http'),
    port = 8000;

var server = http.createServer(function server(req, res){
  // Figure out which file the HTTP request is looking for
  var file;

  switch(req.url) {
    case "/":
      file = 'index.html'
      break;
    case "/ninjas":
      file = 'ninjas.html'
      break;
    case "/dojos/new":
      file = 'dojo.html'
      break;
    default:
      file = null;
      break;
  }
  // Send file or error to browser
  if (file !== null) {
    // First argument uses string interpolation
    fs.readFile('static/' + file, 'utf8', function(err, contents){
      if (err) { console.log(err); }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }else{//if file is null, not found
    res.writeHead(404);
    res.end("File not found!");
  }
});
server.listen(port, function(){
  console.log("Running on port:", port)
});
