(function (){

 var box = {};
 // Propriedades
 box.email = document.querySelector("#email");
 box.add   = document.querySelector(".pure-button");
 box.list  = document.querySelector("ul");

 // Metodos 

 box.validate = function(e){
 // console.log(e.target);// Retorno o elemento que foi criado.
  e.preventDefault();

   if (/^(\w|\.|\-)+\@\w+\.\w{2,3}(.\w{2})?$/.test(box.email.value)) {
	   	box.email.classList.remove("error");
	   	box.persist(box.email.value);
	    box.email.value=""; 
   }else{
   		box.email.classList.add("error");

   }
    	box.email.focus();
 };
 
 box.persist  = function(mail){
    
      if(localStorage) {
          if (localStorage.contatos) {
          	var lista = JSON.parse(localStorage.contatos);

          }else {
          	var lista = [];

          }
          lista.push({email:mail});
          localStorage.contatos = JSON.stringify(lista);
          box.refresh();
      }
 };

 box.refresh  = function(){
 	if(localStorage && localStorage.contatos){
 		var contatos = JSON.parse(localStorage.contatos);
 		var html  = "" ;
 		contatos.forEach(function(contato){
             html += "<li>"+contato.email+"</li>";

 		});
 		console.log(html);
 		box.list.innerHTML = html;
 	}

 };
 
 box.init     = function(){
  // box.add.onclick = box.validate; 
  box.add.addEventListener("click",box.validate);
  box.refresh();
 }();

 console.log(box);

})();

