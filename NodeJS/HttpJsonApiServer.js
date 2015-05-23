var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req,res) {
  	if(req.method === "GET"){

      var parsedUrl = url.parse(req.url, true);
      var getTime = new Date(parsedUrl.query.iso);

      function parsetime(){
        return {
          "hour": getTime.getHours(),
          "minute": getTime.getMinutes(),
          "second": getTime.getSeconds()
        };
      }

      function unixtime(){
        return {
          "unixtime": getTime.getTime()
        };
      }

      if(req.url.indexOf('/api/parsetime') != -1){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsetime(getTime)));
      }

      if(req.url.indexOf('/api/unixtime') != -1){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(unixtime(getTime)));
      }

  	}else{
  		res.end('We Need GET\n');
  	}
});
server.listen(Number(process.argv[2]));