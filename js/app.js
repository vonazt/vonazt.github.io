/* global TypeIt */

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

  const nav = $('#nav');
  function displayNav() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 700) {
      nav.removeClass('start');
      nav.addClass('navbar is-fixed-top');
    } else {
      nav.removeClass('navbar is-fixed-top');
      nav.addClass('start');
    }
  }

  $(window).scroll(() => {
    displayNav();
  });
});
