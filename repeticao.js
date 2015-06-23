var alfabeto =[];
var contador = 97;

 while(contador<=122){
  //  console.log(contador, String.fromCharCode(contador));
    alfabeto.push(String.fromCharCode(contador));
    contador++;
 };
console.dir(alfabeto);
console.log(alfabeto.join(";"));




 for(var i=0; i<alfabeto.lengt;i++){
 	console.log(i, alfabeto[i]);
 }


 for(var x=alfabeto.lengt-1; x>=0;x--){
 	console.log(x,alfabeto[x]);
 }


console.log(frutas);

frutas.forEach(function(fruta){
   console.log("chamou",arguments,fruta); // arguments

});

alfabeto.forEach(function(letra){
    console.log(letra);
})








/*

console.dir(String.prototype); //  Prototico de  string
console.dir(Array.prototype); //  prototico de Array
/*

"caelum".anchor();
"<a name="undefined">caelum</a>"
"caelum".big();
"<big>caelum</big>"
"caelum".blink();
"<blink>caelum</blink>"
String.fromCharCode(97);
*/