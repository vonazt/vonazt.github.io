/* global TypeIt */

function displayAboutTab() {
  $('a[id*="about-tab"]').on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().parent().children().children().removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().addClass('is-active');
    $('[id*="about-text"]').hide();
    $(`#${this.id.slice(0, -4)}-text`).show();
  });
}
function displayPortfolioTab() {
  $('a[id*="portfolio-tab"]').on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().parent().children().children().removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().addClass('is-active');
    $('[id*="portfolio-text"]').hide();
    $(`#${this.id.slice(0, -4)}-text`).show();
  });
}


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

  $('[id*="about-text"]').hide();
  $('#why-coding-about-text').show();
  displayAboutTab();

  $('[id*="portfolio-text"]').hide();
  $('#check-it-portfolio-text').show();
  displayPortfolioTab();

  $(window).scroll(() => {
    displayNav();
  });
});
