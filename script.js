// JavaScript File

$(document).ready(function() {
 $("#profile").mouseenter(function(){
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
 }); 
});


$(document).ready(function (){

	$("#s-home").click(function (){
        $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 1500);
    });
    $("#s-profile").click(function (){
        $('html, body').animate({
                    scrollTop: $("#profile").offset().top
                }, 1500);
    });
    $("#s-books").click(function (){
        $('html, body').animate({
                    scrollTop: $("#books").offset().top
                }, 1500);
    });
    $("#s-contact").click(function (){
        $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1500);
    });
});