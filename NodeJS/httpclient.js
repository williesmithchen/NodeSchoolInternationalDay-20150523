var http = require('http');
var net = require('net');
var url = require('url');

http.get(process.argv[2],function(res){
	res.setEncoding("utf8");
	res.on("data",function(data){
		console.log(data);
	});
});