var formatado = numberParaReal(9.9);
var numero = realParseNumber("R$ 120,35");
var paragrafos = document.querySelectorAll("p");
paragrafos.textContent = "Alterado  rogramaticamente";

console.log(formatado);
console.log(numero);
console.log(soma("Quanto é 10 + 20??"));

/* Fazer no  console 
 Exer 3.3
var paragrafos = document.querySelectorAll("p");
paragrafos.textContent = "Alterado  rogramaticamen";
*/

var ancora = document.querySelector("#myBtn");

ancora.addEventListener("click",function(event){
  alert("cliquei");
  event.preventDefault();
  
});




