// Objeto literal 
var carro ={}; // objeto Vazio
// Propriedades - dot notation
//objeto.propriedade = valor; difine
// recuperar
// objeto.propriedade;

carro.cor =  "vermelho";
carro.modelo = "fox";
carro.fabricante = "vw"


// Propriedades -   brackets notatiob
// obejeto["propriedade"]= valor -- Define
// objeto["propriedade"]; - Recuperar
carro["ano"]=2015;
carro["portas"]=5;
carro["motor"]=1.6;

// Metodo - dor notation
//objeto.metodo = function(){} -- Funcao anonima -- defibe
//objeto.metodo(); -- Executar
carro.ligar= function(){

	return"carro ligado";
};

carro.desligar= function(){
	return"carro desligado"
}

// metodo - bracket notification
// objeto["metodo"]=function(){} -- Define
// objeto["metodo"]=function() -- execultat
carro["acelerar"]=function(){
	return"10km/h";
}

// Obejeto auto definido

var people = {

	nome:"Joao",
	sexo: "M",
	idade:20,
	altura:1.80,
	falar:function(){
		return this.nome+" Disse Ola";
	},
	dormir:function(){
		return this.nome+" Esta dormindo";
	}
};


console.log(carro); 

console.log(people);