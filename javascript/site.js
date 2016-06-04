var ROLCHAU = {};

(function() {
  var sliderItem,
      siteNavBar,
      aItem;

  function onClick(e) {
    var target = e.target;

    if (target === e.currentTarget) {
      return;
    } else {
      aItem.classList.remove('is-active');
    }

    if (target.classList.contains('site-header__nav-item')) {
      target = target.parentNode;
    }

    sliderItem.style.transform = getSlideToStyle(target);

  }

  function getSlideToStyle(toElm) {
    let bounds = toElm.getBoundingClientRect();
    let translateX = bounds.left;
    let translateY = bounds.top;
    let scaleX = bounds.width / 200; //SliderItem is 200px wide
    return 'translateX(' + translateX + 'px) translateY(' + translateY + 'px) scale3d(' + scaleX + ', 1, 1)';
  }

  function init() {
    sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');

    aItem = document.querySelector('.is-active');
    sliderItem.style.transform = getSlideToStyle(aItem);

    siteNavBar = document.querySelector('.site-header__nav');
    siteNavBar.addEventListener('click', onClick);
    siteNavBar.appendChild(sliderItem);
  }

  ROLCHAU.menuSlider = {
    init: init
  };
}());

ROLCHAU.init = function() {
  this.menuSlider.init();
};

window.addEventListener('DOMContentLoaded', function() {
  ROLCHAU.init();
});
