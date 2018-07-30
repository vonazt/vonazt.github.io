/* global TypeIt */
console.log('loaded');

window.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#about-me-title', {
    strings: 'ABOUT ME',
    speed: 100,
    autoStart: false,
    cursor: false,
    lifeLike: true
  });
  new TypeIt('#portfolio-type', {
    strings: 'PORTFOLIO',
    speed: 100,
    autoStart: false,
    cursor: false,
    lifeLike: true
  });

  $('a[href*="#"]').on('click', function() {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
