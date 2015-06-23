
/*var idade = prompt("Didite sua idade");

if (idade  <=12) {
	console.log(idade,"E uma crianca");

} else if(idade <=17){
	console.log(idade, "e adolecente");
}else if(idade <=59){
	console.log(idade, "e adulto");
}else{
	console.log(idade,"e idoso")
}*/
// operacao termario


var idade = prompt("Didite sua idade");
var resp = (idade <=12)? "crianca" :(idade <=17) ? "adolecente": "adulto";
console.log(idade, resp);


// swite case
var diaDaSemana = prompt("Digite o dia da semana");
 switch(diaDaSemana){

 	case "1":
 	console.log("Domingo"); 
 	breack;	
 	case "2":
 	console.log("segunda");
 	breack;
 	case "3":
 	console.log("terca");
 	breack;
 	default:
 	 console.log("Data invalida");
 }