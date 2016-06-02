var ROLCHAU = {};

(function() {
  var sliderItem,
      siteNavBar;

  function onClick(e) {
    var target = e.target;

    if (target === e.currentTarget) {
      return;
    } else {
      e.currentTarget.querySelector('.is-active').classList.remove('is-active');
    }

    if (target.classList.contains('site-header__nav-item')) {
      target = target.parentNode;
    }

    console.log(target);
  }

  function init() {
    sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
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
