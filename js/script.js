var main = function() {

  $("#header").load("menu.html"); 
  $("#footer").load("footer.html"); 
  $("#portfolio").load("portfolio.html"); 

  //reveal contact info on click
  $(document).on('click', '.contact', function() {
    $(this).toggleClass('color-orange dashed-border');
    $('.contact-content').slideToggle(200);

  });

  //open menu
  $(document).on('click', '.icon-menu', function(){
      openMenu();
  });

  //close menu
  $(document).on('click', '.icon-menu-close', function(){
      closeMenu();
  }); 
  
}

var openMenu = function() {
        
      $('.menu').animate({
        left: "0px"
      }, {
        duration: 350,
        easing: 'easeOutExpo'
      });

      $('body').animate({
        left: "225px"
      }, {
        duration: 350,
        easing: 'easeOutExpo'
      });
       
}

var closeMenu = function() { 
  
    $('.menu').animate({
      left: "-300px"
    }, {
        duration: 400,
        easing: 'easeOutExpo'
      });

    $('body').animate({
      left: "0px"
    }, {
        duration: 400,
        easing: 'easeOutExpo'
      });

}

$(document).ready(main);



