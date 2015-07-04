$(document).ready(function(){
  var getCustomersSucess = function(customers){
  	console.table(customers);
  	$.each(customers, function(index,costumer){
  		console.log(costumer);
  	})

  };
  var getCustomersError = function(){
  	console.log("Error");
  };



 var getCustomers = function(){
     $.ajax({
       url: "http://www.mocky.io/v2/5598316c6344714f0c576735"
      ,dataType: "jsonp"
      ,success : getCustomersSucess
      ,error : getCustomersError


     });
 };






 getCustomers();
})