$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });	
 

   var wechatboxTimeout;
    $(".medical-service-content .elementor-icon").on('mouseenter',function(){
      $(this).next('.popover').show();
    })
    $(".medical-service-content .elementor-icon").on('mouseleave',function(){
      $(this).next('.popover').hide();
    })




})