var button = document.querySelectorAll('.site-nav__item a');

for (var i = 0; i < button.length; i++) { 
  button[i].addEventListener('click', function(event) {
    var target = event.target;
    target.classList.add('is-animating');    
    var boxesTest = target.previousElementSibling.querySelectorAll('rect[id^=box-]');
    TweenMax.staggerTo(boxesTest, 0.4, {ease: Power1.easeInOut, y: -100, opacity: 0}, 0.1, animationDone, [boxesTest], event.target);
  });
}

function animationDone(boxes) {
  TweenMax.staggerTo(boxes, 0.4, {y: 0, opacity: 1, rotation: 0}, 0.1);
  this.classList.remove('is-animating');
}