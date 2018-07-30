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

  $('#scroll-arrow').on('click', function() {
    console.log('clicked');
    $('#about-me').animate({ scrollTop: $('#about-me')[0].scrollheight}, 'linear');
  });
});
