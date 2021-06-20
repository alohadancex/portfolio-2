"use strict";

$('.menu__btn').on('click', function () {
  $('.nav__list').toggleClass('nav__list--active');
});
"use strict";

$('.info__item').slick({
  arrows: false,
  dots: false,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 1666,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 696,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
