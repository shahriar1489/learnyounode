// 4 first synch
var fs = require('fs');

// read file
var file = fs.readFile(process.argv[2], function(err, data) {	// the parameters are default 
  var str = data.toString();	// convert buffer to string
  console.log(str.split('\n').length - 1);  // count new lines
});


