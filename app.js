var http = require('http');
var print = require('./exporter');


http.createServer(function(req, res) {
  res.writeHead(200); //sets the response code in the header
  // res.write("test \n");
  res.write(print.printer());
  res.write(print.randomizer());

  // res.write(print.printer() + print.random()); //inserts text into the response

  res.end(); //ok to send response
}).listen(3000);
