/* global TypeIt */
console.log('loaded');

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#my-name', {
    strings: 'RICHARD TZANOV',
    speed: 50,
    autoStart: true
  });
});
