$("body").on("click", "#menu-icon", function () {
  $("#menu-icon").toggleClass("toggle");
  $("#navbar").toggleClass("toggle");
});

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
