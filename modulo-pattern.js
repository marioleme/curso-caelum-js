var APP =(function() {
  console.log("Init module");
  var box = {};
  box.count = 0;
  box.addCount = function(){
    return box.count+=1;

  } 
  box.getCount = function(){
  	return box.count;
  }





return {add:box.addCount,
	    get:box.getCount
	   };
console.log(box)
})();