/*
 Expressoes reguilar

^[0-9]{5}\-[0-9]{3}$

^\d{5}\-?\d{3}$

^\w+\@(\w+\.)+\w{2}

^(\w|\.|\-)+\@\w+\.\w{2,3}(.\w{2})?$


(\+[1-9]{2}\s[1-9]{2}\s)?9?\d{3,4}\d\-\d{4}$

*/


var cepDigitado = prompt("Digite  o seu cep");

console.log(
 /^\d{5}\-?\d{3}$/.exec(cepDigitado)

);


console.log(
 /^\d{5}\-?\d{3}$/.test(cepDigitado)

);


console.log(
cepDigitado.match(/^\d{5}\-?\d{3}$/)

);

console.log(
   cepDigitado.replace(/\<\/?<\w+\>/g, "")
	)