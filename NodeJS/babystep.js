var a = 0;
for(var b = 2;b<process.argv.length;b++){
	a += Number(process.argv[b]);
}
console.log(Number(a));