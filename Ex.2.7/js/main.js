var numero = 9.9;
var formatado = numero.toFixed(2);
formatado = "R$ " + formatado;
formatado = formatado.replace(".", ",");

console.log(formatado);


var texto = "R$ 120,35";
var soNumero = texto.replace("R$", "");
soNumero = soNumero.replace(",", ".");
var valor = parseFloat(soNumero);

console.log(valor);