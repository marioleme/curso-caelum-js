

function numberParaReal(numero){
	 var formatado = "R$ " + numero.toFixed(2).replace(".", ",");
	 return formatado;
};

 function realParseNumber(texto){
     var compativelComParseFloat = texto.replace("R$ ","");
	 compativelComParseFloat = compativelComParseFloat.replace(",",".");
	 var valor = parseFloat(compativelComParseFloat); 
	 return valor;


 }