//  Criando elemento  dinamicamente

(function (){
 var img = document.createElement("img");
 console.log(img);
 img.setAttribute("src" ,"http://lorempixel.com/200/200/");
 img.alt = "texto elemento";
 document.body.appendChild(img);

 var  h2 = document.createElement("h2");


 var conteudo =  document.createTextNode("Caelum");
 h2.appendChild(conteudo);
 console.log(h2);
 document.body.appendChild(h2);

 var p = document.createElement("p");
 p.textContent = "Mario";
 document.body.appendChild(p);


// Exercicios 
var ul =  document.createElement("ul");

 for(var i= 1; i <= 10; i++){
 	  var li = document.createElement("li");
       ul.appendChild(li);
       li.textContent = ("item "+i);
};
document.body.appendChild(ul);


/** Tabela */ 
 var cursos = [
   {cod: "Fj-11", instrutor:"juliana"},
   {cod: "Fj-12", instrutor:"marcos"}

 ];


var tbody  = document.createElement("tbody");
cursos.forEach(function(curso){
  var tr = document.createElement("tr");
  var tdcod =  document.createElement("td");
  var tdinstru = document.createElement("td");
  tdcod.textContent = curso.cod;
  tdinstru.textContent = curso.instrutor;
  tr.appendChild(tdcod);
  tr.appendChild(tdinstru);
  tbody.appendChild(tr);

})
document.querySelector("table").appendChild(tbody);


document.querySelector("img").style.border = "5px solid";

document.querySelector("h1").style.backgroundColor = "tomato";



})();

/*
dom.js:15 <h2>​Caelum​</h2>​
document
#document
document.querySelector("h1")
<h1>​Script load​</h1>​
document.querySelector("h1")parrentNode

document.querySelector("h1").parentNode
<body>​…​</body>​
document.querySelector("h1").parentNode.parentNode
<html>​…​</html>​
document.querySelector("h1").parentNode.parentNode.children
[<head>​…​</head>​, <body>​…​</body>​]
document.querySelector("h1").parentNode.parentNode.children[0]
<head>​…​</head>​
document.querySelector("h1").parentNode.parentNode.children[1]
<body>​…​</body>​
document.querySelector("h1").parentNode.parentNode.children[0].children
[<title>​script loader​</title>​, <script src=​"head.load.min.js" type=​"text/​javascript">​</script>​, <script type=​"text/​javascript" src=​"dom.js">​</script>​]
document.querySelector("h1").parentNode.parentNode.children[0].fistChild
undefined
document.querySelector("h1").parentNode.parentNode.children[0].firstChild
#text
document.querySelector("h1").parentNode.parentNode.children[0].children
[<title>​script loader​</title>​, <script src=​"head.load.min.js" type=​"text/​javascript">​</script>​, <script type=​"text/​javascript" src=​"dom.js">​</script>​]
document.querySelector("h1").parentNode.parentNode.children[0].children[0]
<title>​script loader​</title>​
document.querySelector("h1").parentNode.parentNode.children[0].fistElementChild
undefined
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild
<title>​script loader​</title>​
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild
<title>​script loader​</title>​
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild.netxSibling
undefined
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild.nextSibling
#text
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild.nextSibling.prevSibling
undefined
document.querySelector("h1").parentNode.parentNode.children[0].firstElementChild.nextSibling.prevSibling
undefined
d

*/