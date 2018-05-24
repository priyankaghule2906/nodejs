var http = require("http");

function process_request(req,res){
   console.log("Begin Process Request");

   console.log("The method is "+req.method +" and the URL is "+req.url);
   res.writeHead(200,{
     'content-type':'application/json'
   });
   res.end(JSON.stringify({error:null, data: {}}));
}

var s = http.createServer(process_request);
s.listen(8080);


/*
*{ error : null | {code : "no_such_user", message : "such a user does not exist"},
* data :
*}
*
*/
