'use strict';

// const { EffectFade } = require("swiper");

(function () {
   let openSelect = document.querySelector('.select__header');
   openSelect.addEventListener('click', addSelect);

   let itemSelect = document.querySelectorAll('.select__item');
   itemSelect.forEach(item => {
      item.addEventListener('click', choiseSelect);
   });
})();

function addSelect() {
   let addClass = document.querySelectorAll('.select');
   addClass.forEach(item => {
      item.addEventListener('click', toggleInput);
   });
}

function toggleInput() {
   this.classList.toggle('select--active')
};

function choiseSelect() {
   let text = this.innerText;
   let currentText = this.closest('.select').querySelector('.select__current')
   console.log(currentText);
   currentText.innerText = text;

   addSelect();
}

function initMap() {
   //стили которые взяли с https://mapstyle.withgoogle.com/
   let coords;
   coords = {
      lat: 49.583043306202754,
      lng: 34.49817999747083
   }
   map = new google.maps.Map(document.getElementById("map"), {
      center: coords,
      zoom: 14,
      disableDefaultUI: true,
   });
}
(function ($) {
   $(document).ready(function () {
      //! Mask input
      $("#phone").mask("+380 (999) 999-999");
      $("#phone-1").mask("+380 (999) 999-999");
      $("#date").mask("99/99/9999");

      //! Code
      $('.burger').on('click', function () {
         $(this).toggleClass('burger--open');
         $('.menu__wrapper').toggleClass('menu__wrapper--open');
         $('body').toggleClass('lock');
      });

   });

   $('.tabs__btn').on('click', function () {
      $('.tabs__all').toggleClass('tabs__all--active');
   });

   $('.tabs__list').click(function (operation) {
      operation.preventDefault();
      $('.tabs__list').removeClass('tabs__list--active');
      $('.tabs__wrapper--active').removeClass('tabs__wrapper--active');

      $(this).addClass('tabs__list--active');
      let item = $(this).find('a').attr('href');
      $(item).addClass('tabs__wrapper--active');
   });

$(window).scroll(() => {
   if ($(window).scrollTop() > 5) {
      $('.menu__wrapper').addClass('menu__wrapper--scroll');
      $('.menu__items').addClass('menu__items--scroll');
      $('.logo').addClass('logo--scroll');
   } else {
      $('.menu__wrapper').removeClass('menu__wrapper--scroll');
      $('.menu__items').removeClass('menu__items--scroll');
      $('.logo').removeClass('logo--scroll');
   }
});
})(jQuery);

new Swiper('.swiper__container', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
   // effect: 'fade',
   // fadeEffect: {
   // 	crossFade: true
   // }
});
