var fs = require("fs");

/*
Reading file asynchronously  
*/
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});


/*

Reading file synchronously
var contents = fs.readFileSync('input.txt', 'utf8');
console.log(contents);
*/

console.log("Testing the asynchronous nature of the Program");
