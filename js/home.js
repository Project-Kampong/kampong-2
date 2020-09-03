$(document).ready(function () {
  $(window).on("scroll", function () {
    var Windowheight = $(window).scrollTop();
    console.log(Windowheight);
    $(".moving-animate").css({
      transform: `translateY(${-Windowheight * 0.2}px)`,
    });
  });

  // Events
  $(".demo ul li").on("click", function () {
    $(".demo ul li").removeClass("active");
    $(this).addClass("active");
  });
});
