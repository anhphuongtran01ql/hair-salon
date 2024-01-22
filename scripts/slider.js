$(".constant-simple-slider").slick({
  cssEase: "linear",
  speed: 8000,
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  responsive: [{ breakpoint: 769, settings: { slidesToShow: 2 } }],
});
