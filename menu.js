$(document).ready(function(){
  $('.menu-trigger').click(function(){
      $('nav ul').slideToggle(500);
      }); //(closing slidetoggle)


$(window).resize(function(){
  if ($(window).width()>500){
    $('nav ul').removeAttr('style');
}

}) //(closing resize function)
}); //(closing document ready)
