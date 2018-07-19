/* global TypeIt */
console.log('loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  new TypeIt('#my-name', {
    strings: 'RICHARD TZANOV',
    speed: 50,
    autoStart: true
  });
});
