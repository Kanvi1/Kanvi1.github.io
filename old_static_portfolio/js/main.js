(function () {
  'use strict';

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf('iPad') != -1;
  };

  var isiPhone = function () {
    return navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPod') != -1;
  };

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  var burgerMenu = function () {
    $('.js-colorlib-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($('body').hasClass('menu-show')) {
        $('body').removeClass('menu-show');
        $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
      } else {
        $('body').addClass('menu-show');
        setTimeout(function () {
          $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
        }, 900);
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {
            $('body .animate-box.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated');
                  } else {
                    el.addClass('fadeInUp animated');
                  }

                  el.removeClass('item-animate');
                },
                k * 200,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '85%' }
    );
  };

  var counter = function () {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($('#colorlib-counter').length > 0) {
      $('#colorlib-counter').waypoint(
        function (direction) {
          if (direction === 'down' && !$(this.element).hasClass('animated')) {
            setTimeout(counter, 400);
            $(this.element).addClass('animated');
          }
        },
        { offset: '90%' }
      );
    }
  };

  // Owl Carousel
  var owlCarouselFeatureSlide = function () {
    var owl = $('.owl-carousel1');
    owl.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      // autoHeight: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });

    var owlproj = $('.owl-carousel-projects');
    owlproj.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      autoplayTimeout: 15000,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });

    var owl2 = $('.owl-carousel');
    owl2.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      autoplayTimeout: 10000,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
    var owl3 = $('.owl-carousel3');
    owl3.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
  };

  var hoverCircleInit = function () {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX - 10;
      const y = e.clientY - 10;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
    });

    const hoverableElements = document.querySelectorAll('.hoverable');

    hoverableElements.forEach(function (element) {
      element.addEventListener('mouseenter', function () {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.opacity = 0.5;
      });

      element.addEventListener('mouseleave', function () {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.opacity = 1;
      });
    });
  };

  // var contactFormSubmit = function () {
  //   $('#contact-form').submit(function (event) {
  //     event.preventDefault();
  //     var formData = $(this).serialize();
  //     $.ajax({
  //       type: 'POST',
  //       url: 'https://formspree.io/f/mjvnowae',
  //       data: formData,
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //       success: function (response) {
  //         // Handle success
  //         alert('Success!');
  //         $('#thankYouMessage').text('Thank you for your submission!');
  //         // Optionally, you can clear the form fields or perform any other action.
  //       },
  //       error: function (xhr, status, error) {
  //         alert('Error!');
  //         // Handle error
  //         console.error('Form submission failed:', error);
  //       },
  //     });
  //   });
  // };

  // FORM SPREE
  var cfs2 = function () {
    var form = document.getElementById('contact-form');
    var showError = function (msg) {
      if (msg == 'should be an email') {
        msg = 'Invalid Email address.';
      }
      $('#form-submit-h2').text('Oops!');
      $('#form-submit-p').html(
        `There was a problem submitting your form. Please retry. </br> ${msg}`
      );
      $('#form-div').css('opacity', '0');
      $('#form-thankyou').css('opacity', '1');
      setTimeout(() => {
        $('#form-div').css('opacity', '1');
        $('#form-thankyou').css('opacity', '0');
      }, 3000);
    };
    var showSuccess = function () {
      $('#form-submit-h2').text('Thank You!');
      $('#form-submit-p').text('I will get back to you as soon as I can :)');
      $('#form-div').css('opacity', '0');
      $('#form-thankyou').css('opacity', '1');
      $('#speed-gif').show();
      setTimeout(() => {
        $('#form-div').css('opacity', '1');
        $('#form-thankyou').css('opacity', '0');
        $('#speed-gif').hide();
      }, 3000);
    };

    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            // status.innerHTML = 'Thanks for your submission!';
            showSuccess();
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, 'errors')) {
                showError(data['errors'].map((error) => error['message']).join(', '));
                console.log(data['errors'].map((error) => error['message']).join(', '));
                // status.innerHTML = data['errors'].map((error) => error['message']).join(', ');
              } else {
                // status.innerHTML = 'Oops! There was a problem submitting your form';
                showError();
                console.log('Issue');
              }
            });
          }
        })
        .catch((error) => {
          showError();
          // status.innerHTML = 'Oops! There was a problem submitting your form';
          console.log(error);
        });
    }
    form.addEventListener('submit', handleSubmit);
  };
  // Document on load.
  $(function () {
    fullHeight();
    burgerMenu();
    counterWayPoint();
    contentWayPoint();
    owlCarouselFeatureSlide();
    hoverCircleInit();
    cfs2();
    // contactFormSubmit();
  });
})();
