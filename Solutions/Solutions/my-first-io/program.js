
// 3 // my first io
var fs = require('fs');
	
var bf = fs.readFileSync(process.argv[2]); // read file- return buffer
//console.log(bf); 
var str = bf.toString(); // convert buffer to string	
//console.log("process.argv[0] = " + process.argv[0]);
//console.log("process.argv[1] = " + process.argv[1]);
//console.log("process.argv[2] = " + process.argv[2]);	

//console.log("process.argv = " + process.argv);
console.log(str.split('\n').length - 1);// show new lines


