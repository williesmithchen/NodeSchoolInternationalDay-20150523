var http = require('http');
var net = require('net');
var url = require('url');

var one = [];
var two = [];
var three = [];
var lock = 0;

http.get(process.argv[2],function(res){
	res.setEncoding("utf8");
	res.on("data",function(data){
		one.push(data);
	});
	res.on("end",function(){
		lock=lock+1;
		if(lock >=3 && one.length!=0 && two.length!=0 && three.length!=0){
			console.log(one.join(""));
			console.log(two.join(""));
			console.log(three.join(""));
		}
	});
});

http.get(process.argv[3],function(res){
	res.setEncoding("utf8");
	res.on("data",function(data){
		two.push(data);
	});
	res.on("end",function(){
		lock=lock+1;
		if(lock >=3 && one.length!=0 && two.length!=0 && three.length!=0){
			console.log(one.join(""));
			console.log(two.join(""));
			console.log(three.join(""));
		}
	});
});

http.get(process.argv[4],function(res){
	res.setEncoding("utf8");
	res.on("data",function(data){
		three.push(data);
	});
	res.on("end",function(){
		lock=lock+1;
		if(lock >=3 && one.length!=0 && two.length!=0 && three.length!=0){
			console.log(one.join(""));
			console.log(two.join(""));
			console.log(three.join(""));
		}
	});
});


// // ans:
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0

    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)

    //       results[index] = data.toString()
    //       count++

    //       if (count == 3)
    //         printResults()
    //     }))
    //   })
    // }

    // for (var i = 0; i < 3; i++)
    //   httpGet(i)
