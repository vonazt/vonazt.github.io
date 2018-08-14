/* global TypeIt */

function displayAboutTab() {
  $('a[id*="about-tab"]').on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().parent().children().children().removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().addClass('is-active');
    $('[id*="about-text"]').hide();
    $(`#${this.id.slice(0, -4)}-text`).show();
    $('.text').animate({
      scrollTop: $('#about-me-title').position().top
    }, 'linear');
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
    $('.text').animate({
      scrollTop: $('#portfolio-type').position().top
    }, 'linear');
  });
}

function portfolioDropdown() {
  $('.portfolio-drop').on('click', function() {
    $(this).toggleClass('is-active');
  });
}

function dropdownActive() {
  $('.dropdown-item').on('click', function() {
    $(this).addClass('is-active');
    $(this).siblings().removeClass('is-active');
  });
}

function navbarBurgerToggle() {
  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {
    // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
}

function closeNavbar() {
  $('.navbar-item').on('click', function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
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

  $('a[href*="#menu"]').on('click', function() {
    $('html').animate({ scrollTop: $($(this).attr('href')).position().top }, 'linear');
  });
  $('a[href*="#internal"]').on('click', function() {
    $('html').animate({ scrollTop: $($(this).attr('href')).position().top }, 'linear');
  });

  const $nav = $('#nav');
  function displayNav() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 700) {
      $nav.removeClass('hidden-nav');
      $nav.addClass('navbar is-fixed-top');
    } else {
      $nav.removeClass('navbar is-fixed-top');
      $nav.addClass('hidden-nav');
    }
  }

  $('[id*="about-text"]').hide();
  $('#as-a-coder-about-text').show();
  displayAboutTab();

  $('[id*="portfolio-text"]').hide();
  $('#check-it-portfolio-text').show();
  displayPortfolioTab();

  portfolioDropdown();
  dropdownActive();
  navbarBurgerToggle();
  closeNavbar();

  $(window).scroll(() => {
    displayNav();
  });

  // const $panels = $('.panel');
  //
  // console.log($panels);
  //
  // function toggleOpen() {
  //   this.classList.contains('open') ? this.classList.remove('open') :  $panels.removeClass('open') && this.classList.add('open');
  // }
  //
  // function toggleActive() {
  //   this.classList.toggle('open-active');
  // }
  //
  // $panels.each(function() {
  //   $(this).on('click', toggleOpen);
  // });
  //
  // $panels.each(function() {
  //   $(this).on('transitionend', toggleActive);
  // });

  // $panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  // $panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

});
