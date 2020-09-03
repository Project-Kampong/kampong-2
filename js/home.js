$(document).ready(function () {
  $(window).on("scroll", function () {
    var Windowheight = $(window).scrollTop();
    $(".moving-animate").css({
      "-ms-transform": `translateY(${-Windowheight * 0.2}px`,
      " -webkit-transform": `translateY(${-Windowheight * 0.2}px`,
      "-moz-transform": `translateY(${-Windowheight * 0.2}px`,
      "-o-transform": `translateY(${-Windowheight * 0.2}px`,
      transform: `translateY(${-Windowheight * 0.2}px)`,
    });
  });

  // Events
  $(".demo ul li").on("click", function () {
    $(".demo ul li").removeClass("active");
    $(this).addClass("active");
  });
});
