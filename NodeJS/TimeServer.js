var net = require('net')
var server = net.createServer(function (socket) {
	var date = new Date();

	function zerofill(num){
		return (num < 10 ? "0" : "") + num;
	}

	//"YYYY-MM-DD hh:mm"
	var YYYY = date.getFullYear();
	var MM = date.getMonth() + 1;
	var DD = date.getDate();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var datestr = zerofill(YYYY)+"-"+zerofill(MM)+"-"+zerofill(DD)+" "+zerofill(hh)+":"+zerofill(mm);

	socket.end(datestr+'\n');
})
server.listen(Number(process.argv[2]))