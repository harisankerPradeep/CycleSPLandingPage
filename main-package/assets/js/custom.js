// ready function start 
$(document).ready(function($) {
  "use strict";
    var dc = $(document);
  // owl crousel 
  OwlCarousel();

  /*************** header clone *******************/
  $("#loading").delay(2000).fadeOut("slow");
  //$(".header-body").clone().appendTo(".cloned-header");

  /************ sticky header  *******************/

  //if (!!$('#header').offset()) {
  onScroll1();
  stickyheader();
  $(window).scroll(function(){
      stickyheader();
      onScroll1();
    });
 // }

   /**=== active class on a ========**/
    ///dc.on("scroll", onScroll1);

  new WOW().init();
  /************************  mobile menu  *******************/
  $('.header-btn-collapse-nav').on('click', function () {
    $('.header-nav-main').toggleClass('in');
    //$('.page-overlay').addClass('active');
  });
  $('.header-nav-main a').on('click', function(){
    if($('.header-nav-main').hasClass('in')){
      $('.header-nav-main').removeClass('in');
     }
  });

  
  //  Accordion Panels
  jQuery(".accordion .pane").css('display','none');
  jQuery(".accordion li.current + .pane").css('display','block');
  jQuery(".accordion li.question").on('click', function (){
    jQuery(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
    jQuery(this).toggleClass("current");
    jQuery(this).siblings("li.question").removeClass("current");
  });
});


// OwlCarousel function here user can change slider properties like itme, slideSpeed, autoPlay etc.
function OwlCarousel() {

  if ($(".screenshots-slider").length > 0) {
    $(".screenshots-slider").each(function() {
      $(this).owlCarousel({
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        slideSpeed: 500,
        paginationSpeed: 1000,
        rewindSpeed: 1000,
        autoHeight: false,
        ClassActive: true,
        autoPlay: true,
        loop: true,
        pagination: false
      });
    });
  } 
 
  if ($(".feedback-slider").length > 0) {
    $(".feedback-slider").each(function() {
      $(this).owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        slideSpeed: 500,
        paginationSpeed: 1000,
        rewindSpeed: 1000,
        autoHeight: false,
        ClassActive: true,
        autoPlay: true,
        loop: true,
        pagination: false
      });
    });
  }
}

function stickyheader(){
  var stickyTop = 2;
  var windowTop = $(window).scrollTop();
  if (stickyTop < windowTop){
    $('.header-narrow').addClass("sticky-app-top");
    $('.white-logo').attr("src", "assets/img/logo-blue.png");
    
  }else {
    $('.header-narrow').removeClass("sticky-app-top");
    $('.white-logo').attr("src", "assets/img/logo.png");
  }
}

/*====== function for page scroll on section ==========**/
function onScroll1(){
  var scrollPos = $(document).scrollTop();
  $('.nav li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos + 50 && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


