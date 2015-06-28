var escopo = "global";

function executa (argument) {
	console.log(escopo);
	var escopo = "local";
	console.log(escopo);
}
