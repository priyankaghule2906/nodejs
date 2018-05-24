var http = require("http");

function process_request(req,res){
   var body ='This is the body of the my web page\n';
   var content_length = body.length;

   res.writeHead(200,{
     'Content-length': content_length,
     'content-type':'text/plain',
   });

   res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);
