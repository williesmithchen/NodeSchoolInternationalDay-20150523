var fs = require('fs');
var buffer = fs.readFile(process.argv[2],'utf8',function(err, data){
	if(!err){
		var str = data.toString();
		var countline = str.split('\n');
		console.log(countline.length - 1);
	}
});