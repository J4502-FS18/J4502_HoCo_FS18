$(document).ready(function(){
  $('.menu-trigger').click(function(){
      $('.page').slideToggle(500);
      }); //(closing slidetoggle)


$(window).resize(function(){
  if ($(window).width()>500){
    $('.page').removeAttr('style');
}

}) //(closing resize function)
}); //(closing document ready)
