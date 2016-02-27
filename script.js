// JavaScript File

$(document).ready(function() {
 $("#profile").mouseenter(function(){
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
 }); 
});