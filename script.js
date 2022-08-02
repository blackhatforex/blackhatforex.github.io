//  Slick Slider
// https://kenwheeler.github.io/slick/


$('.story-slideshow').slick({
  dots: true,
  arrows: true,
  infinite: true,
   pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  speed: 1000,
  fade: false,
   autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
      {
      breakpoint: 980,
      settings: {
        arrows: true,
 
      }
    }
  ]
});