$(document).ready(function(){
    console.log($("h1").text("jQuery").css("color", "red"));

    $("<img>").attr("src", "http://www.lorempixel.com/200/200").appendTo("body");

    $("<h2>").text("Caelum").appendTo("body");

    $("<p>").text("Mario").insertBefore("img");
  


});