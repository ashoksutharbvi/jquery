$(document).ready(function () {
  $('.bottom_section_wrapper').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2, // Show 2 slides on tablets
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1, // Show 1 slide on mobile
          }
      }
  ]
  });
});