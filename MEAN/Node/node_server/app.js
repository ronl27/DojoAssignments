// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting:
  console.log('client request URL:', request.url);
  // this is how routing
  if (request.url === '/'){ // asking URL property if request = '/'. The route '/' is always considered the ROOT ROUTE.
    fs.readFile('index.html', 'utf8', function(errors, contents){ //this line is needed when you have any text based document you serve!!
      response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
      response.write(contents); //send response body
      response.end(); //finished
    });
  }
  //adding Modification to from previous example:
  else if (request.url ==="/dojo.html"){
    fs.readFile('dojo.html', 'utf8'. function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  //request doesnt match anything
  else {
    response.writeHead(404);
    response.end('File not found!');
  }
});
//tell your server which port to run on
server.listen(8000);
//print to terminal
console.log('I am running on localhost, port 8000');
