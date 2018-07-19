/* global TypeIt */
console.log('loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  new TypeIt('#my-name', {
    strings: 'BLAAAAH',
    speed: 50,
    autoStart: true
  });
});
