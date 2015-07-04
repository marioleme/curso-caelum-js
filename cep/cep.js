$(document).ready(function(event){
 var validateEntry = function(){
  //console.log(event.target.value);
  //console.log(this.value);
  //console.log($(this).val());
  $(this).val(this.value.replace(/\D/g, ""));
 };

var getAddressSuccess = function(address){
	 console.log(address);
	 $.each(address, function(key,value){
      console.log(key,value);
      $("#"+ key).val(value);

	 });
};
var getAddressError = function(){
	console.log("erro");
};

 var getAddress =  function(){
  if(this.value.length === 8){
        $(this).removeClass("error");
        $.ajax({
            url:"http://cep.correiocontrol.com.br/"+this.value+".json"        	
           ,dataType:"json"
           ,success: getAddressSuccess
           ,error: getAddressError
        }); 
  }else{
  	  $(this).addClass("error").focus();
  }
 };


$("#cep").on("input", validateEntry).on("focusout" , getAddress);

});