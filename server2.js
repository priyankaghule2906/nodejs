var http = require("http");
    fs = require("fs");

function load_albums_list(callback){

  fs.readdir("albums",(err,files)=>{
    if(err){
      callback(err);
    } else {

      var only_dirs= [];

      var iterator = (index) => {
        if(index == files.length){
           callback(null,only_dirs );
        } else {
          fs.stat("albums/" + files[index], (error,stats) => {
              if (stats.isDirectory()){
              only_dirs.push(files[index]);
              console.log(only_dirs);
            }
            iterator(index+1);
          });

        }
      }

      iterator(0);

    }
  });

}

function handle_incoming_request(req,res){

console.log("Entered handle_incoming_request");
  load_albums_list((err, albums)=>{
    console.log("Entered load_albums_list");
    if (err){
      res.writeHead(500,{"Content-Type":"application/json"});
      res.end(JSON.stringify(
                             {error:"cant_load_albums",
                              message: err.message
                             }));
    }
    else {

      var output = {error:null,
                    data : {albums : albums}
                   };
      res.writeHead(200,{"Content-Type":"application/json"});
      res.end(JSON.stringify(output));

    }
  });
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);



/**
Loops that dont work with asynchronous programming

var only_dirs =[];

console.log("Files is array and its length is "+files.length);

for (var i =0; i< files.length;i++){

  console.log("albums/"+files[i]);

  fs.stat("albums/" + files[i], (error,stats) => {
      if (stats.isDirectory()){
      only_dirs.push(files[i]);
      console.log(only_dirs);
    }
  });
}
      callback(null, only_dirs);
**/
