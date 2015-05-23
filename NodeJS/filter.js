var fs = require('fs');
// console.log(process.argv[2]);
// console.log(process.argv[3]);
var dirfilter = fs.readdir(process.argv[2], function(err, list){
	//no error
	if(!err){
		for(var a = 0;a<list.length;a++){
			if(list[a].indexOf("."+process.argv[3])!=-1){
				console.log(list[a]);
				// console.log(list[a].indexOf(process.argv[3]) + ":" + list[a] + ":" + process.argv[3]);
			}
		}
	}
});

 // var fs = require('fs')
 // var path = require('path')

 // fs.readdir(process.argv[2], function (err, list) {
 //   list.forEach(function (file) {
 //     if (path.extname(file) === '.' + process.argv[3])
 //       console.log(file)
 //   })
 // })