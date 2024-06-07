$(document).ready(function () {
  "use strict";
  /* ======================= drop-down-lang =============================*/
  $(document).click(function () {
    $(".drop-lang").removeClass("show");
  });

  $(".social .select").click(function (e) {
    e.stopPropagation();
    $(".drop-lang").toggleClass("show");
  });
  // drop input search - when i click on icon
  $(".icon-search").click(function () {
    $(".search-container").toggleClass("active");
  });
  // when i click to icon X .. remove-class-active from form
  $(".search-container .close-search").click(function () {
    $(".search-container").removeClass("active");
  });
  // click on nav-btn in responsive
  $(".nav-btn").click(function () {
    $(".transform-nav-btn").addClass("active");
  });
  // click on transform-nav-btn to remove class active
  $(".transform-nav-btn").click(function () {
    $(this).removeClass("active");
  });
  var isRtl = $("html[lang='ar']").length > 0;
  /*============================== start maim slider ========================*/
  $(".main-slider").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 10,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
  });

  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }

  // =============================== slide payment in responsive only !!!! =========================================>
  $(".slide-payment").owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 10,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }

  // =============================== start category - slide =====================================

  $(".category-slide").owlCarousel({
    items: 4,
    /*loop: true,*/
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 10,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }

  $(".shop-now").click(function (e) {
    e.preventDefault();
    var el = $(this);
    $(".shop-now i").addClass("active");
    el.addClass("active");
    setTimeout(function () {
      el.removeClass("active");
      $("#cart_success").modal("show");
      $(".shop-now i:last-child").removeClass("active");
    }, 3000);
  });
  /*====================== responsive-footer-links-collapse=======================*/
  if ($(window).width() <= 768) {
    $(".img-footer .foot-title").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".links").stop().slideUp();
      } else {
        $(".img-footer .foot-title").removeClass("active");
        $(".section-links .links").stop().slideUp();
        $(this).addClass("active");
        $(this).siblings(".links").stop().slideDown();
      }
    });
  }
  /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
  $(".nav-btn").click(function () {
    $(".side-bar-content").addClass("active");
  });

  /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
  $(".nav-btn").click(function () {
    $(".side-bar-content").addClass("active");
  });

  $(".side-bar-content .mobil-nav li a").click(function (e) {
    e.preventDefault();
    $(this).next(".menu-ul").addClass("active");
  });

  $(".side-bar-content .mobil-nav li .back").click(function (e) {
    e.preventDefault();
    $(this).parents("ul").removeClass("active");
  });

  $(".service-box .close-nav").click(function () {
    $(this).parents(".side-bar-content").removeClass("active");
  });

  // ===================== footer -bottom icon when i click on ===================
  $(".bottom-nav a").click(function () {
    $(".bottom-nav a").removeClass("active");
    $(this).addClass("active");
  });

  $(".dark-mode").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("dark-theme");
    // if ($(this).hasClass('active')) {
    //     localStorage.setItem("mode", "dark");
    // } else {
    //     localStorage.setItem("mode", "light");
    // }
    // console.log(localStorage.mode)
  });

  /*============= if ================*/
  // if (localStorage.mode == "dark") {
  //     $("body").addClass('dark-theme');
  //     $(".dark-mode").addClass('active')
  // };
});
