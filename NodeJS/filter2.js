var modules = require('./modules');

modules(process.argv[2],process.argv[3],function(err, datas){
	if(err){
		throw err;
	}else{
		datas.forEach(function (data) {
			console.log(data);
		});
	}
});