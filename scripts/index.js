$("body").on("click", "#menu-icon", function () {
  $("#menu-icon").toggleClass("toggle");
  $("#navbar").toggleClass("toggle");
});

$(".constant-simple-slider").slick({
  cssEase: "linear",
  speed: 8000,
  autoPlay: false,
  pauseOnHover: false,
});

$("#btn-to-top").hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#btn-to-top").fadeIn();
  } else {
    $("#btn-to-top").fadeOut();
  }
});

$("body").on("click", "#btn-to-top", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
