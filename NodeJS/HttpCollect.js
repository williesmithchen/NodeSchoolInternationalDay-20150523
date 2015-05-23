var http = require('http');
var net = require('net');
var url = require('url');

var datas = [];
http.get(process.argv[2],function(res){
	res.setEncoding("utf8");
	res.on("data",function(data){
		// console.log(data);
		datas.push(data);
	});
	res.on("end",function(){
		console.log(datas.join("").length)
		console.log(datas.join(""));
	});
});