// array

var frutas = ["uva","banana","abacate"];


console.dir(frutas);
console.log(frutas[1]);
frutas.push("laranja"); //  adiciona no fim do array
frutas.unshift("abacaxi");// adicona no inicio do array
frutas.splice(2,0,"pera");// adiciona na posicao 2 // 0  ele adiciona 
frutas.splice(1,1,"moranga");// adiciona na posicao 2 // 1  ele adiciona  e removendo oque esta no local
frutas.pop(); //  remove ultimo item
frutas.shift();// remove o primeiro elemento
console.log (frutas);
console.log (frutas.sort());// organiza na ordem
console.log (frutas.reverse());// desaorganiza a ordem
console.log (frutas.length);// tamanho do array

frutas = frutas.concat(["maca", "mamao"]); //  ele adiona  
console.log(frutas);

console.log(frutas.join(";")); // ele junta tiranto do string

var fruits = "melao;melacia;kiwi";

console.log(fruits.split(";")); // esse ele retorna com string

