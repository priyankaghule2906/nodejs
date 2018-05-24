var fs = require("fs");


fs.readFile("input.txt",function(err,data){
   if(err)
   throw new Error("Errrrrr !!!");

   console.log(data.toString());
});

console.log("Program Ended !!!");
