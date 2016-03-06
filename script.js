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
    $("#s-profile, #c-s-profile").click(function (){
        $('html, body').animate({
                    scrollTop: $("#profile").offset().top
                }, 1500);
    });
    $("#s-books, #c-s-books").click(function (){
        $('html, body').animate({
                    scrollTop: $("#books").offset().top
                }, 1500);
    });
    $("#s-contact, #c-s-contact").click(function (){
        $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1500);
    });
});
$(document).ready(function (){
    $("#submit").click(function (){
        $.ajax({
            url: "/http://formspree.io/misha.dovganych@gmail.com", 
            method: "POST",
            data: {message: "hello!"},
            dataType: "json"
        });
    });
});