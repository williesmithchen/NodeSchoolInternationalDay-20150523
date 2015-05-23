var http = require('http');
var fs = require('fs');
var datas = [];
var server = http.createServer(function (req,res) {
  	if(req.method === "POST"){
  		req.on('data', function (data) {
  			datas.push(data);
        });
        req.on("end",function(){
        	res.write(datas.join("").toUpperCase());
        	res.end();
        });
  	}else{
  		res.end('We Need POST\n');
  	}
})
server.listen(Number(process.argv[2]));