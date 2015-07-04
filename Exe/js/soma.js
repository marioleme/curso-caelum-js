
function obterNumeroDaString(frase){
	
	//  Expressão regular que considera apenas  digitos
	 var padrao = /\d+/g;
	// a função match  deveolve um  array com os numeros
	return frase.match(padrao);
}


function soma(frase){
  // Numero  recebe um array de String's
  var numeros = obterNumeroDaString(frase);

  // variavel que acumulará o total 
  var soma = 0;

  // Precisamos varrer o array e processar cada número em string
  // convertendo-p em numero

  for(var i = 0; i< numeros.length;i++){
      soma+= parseInt(numeros[i]);
  }

  // retornando  a soma  de todos os números
  return soma;

}
