var fs = require('fs');
var path = require('path');

module.exports = function(_path, _ext, callback) {

	var files = [];

	fs.readdir(_path, function(err, list){
		
		if(err){

			callback(err);

		}else{

			list.forEach(function (file) {
				if (path.extname(file) === '.' + _ext)
				{
					files.push(file);
				}
			});

			callback(null, files);
		}
	});

};