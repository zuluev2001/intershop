$(function() {



  $('.pendant-related__slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    infinite: false
  });


  $('.pendant-tabs__top-item').on('click', function (e) {

    e.preventDefault();
    $('.pendant-tabs__top-item').removeClass('pendant-tabs__top-item--active');
    $(this).addClass('pendant-tabs__top-item--active');

    $('.pendant-tabs__content-item').removeClass('pendant-tabs__content-item--active');
    $($(this).attr('href')).addClass('pendant-tabs__content-item--active');

  });
  

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    nStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.select-style, .prod-filter__num').styler();

  $('.slider__inner').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});
