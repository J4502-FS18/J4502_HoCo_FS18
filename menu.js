$(document).ready(function(){
  $('.menu-trigger').click(function(){
      $('.trigger').slideToggle(500);
      }); //(closing slidetoggle)


$(window).resize(function(){
  if ($(window).width()>500){
    $('.trigger').removeAttr('style');
}

}) //(closing resize function)
}); //(closing document ready)
