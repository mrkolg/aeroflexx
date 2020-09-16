jQuery(function() {
  CanvasLeftMenu();
  initVideoPopUp();
  checkDevice();
  initProductListSlider();
  initCustomScroll();
  initTabs();
  initSlickCarousel();
});

jQuery(window).on('load', function() {
  jQuery('body').addClass('page-loaded');
  initIsotopeGrid();
  animationScroll();
});

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

//= vendors/jquery.tabs.js

// Docs: https://isotope.metafizzy.co/
//= vendors/isotope.min.js
//= vendors/isotope.packery.min.js

// Docs: http://fancyapps.com/fancybox/
//= vendors/jquery.fancybox.pack.js

// Docs: https://greensock.com/docs
//= vendors/TweenMax.min.js
//= vendors/TimelineMax.min.js

// Docs: http://scrollmagic.io/docs/index.html
//= vendors/ScrollMagic.min.js
//= vendors/animation.gsap.min.js
//= vendors/debug.addIndicators.min.js

// Docs: https://github.com/gabceb/jquery-browser-plugin
//= vendors/jquery.browser.min.js

// Docs: https://kenwheeler.github.io/slick/
//= vendors/slick.min.js

// Docs: http://gromo.github.io/jquery.scrollbar/
//= vendors/jquery.scrollbar.min.js

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------


//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// content tabs init
function initTabs() {
  jQuery('.product-comparison-tabset').tabset({
    tabLinks: 'a',
    addToParent: true,
    defaultTab: true
  });
}

function animationScroll() {

	jQuery('.nav-list a').click(function() {
		var ankhor = jQuery(this.hash);
		if (ankhor.length > 0) {
			jQuery('html, body').animate({
				scrollTop: ankhor.offset().top
			}, 300);
		}
	});

	if(window.location.hash) {
		var ankhor = jQuery(window.location.hash);
		if (jQuery(ankhor).length > 0) {
			jQuery('html, body').animate({
				scrollTop: ankhor.offset().top
			}, 300);
		}
		return false;
	}
}

function initCustomScroll () {
  jQuery('.wpcf7 textarea').scrollbar();
}

// slick init
function initSlickCarousel() {
  if (jQuery('.products-links-slider').lenght) return;

  var slidesToScrollCustom = 4;
  var dotsClassCustom = 'products-links-pag';

  var slickSettings = {
      slidesToScroll: 4,
      rows: 0,
      slidesToShow: slidesToScrollCustom,
      arrows: false,
      dots: false,
      dotsClass: dotsClassCustom,
      responsive: [{
        breakpoint: 579,
        settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
      }]
  }

  var slickSettingsWithDots = {
      slidesToScroll: 4,
      rows: 0,
      slidesToShow: slidesToScrollCustom,
      arrows: false,
      dots: true,
      dotsClass: dotsClassCustom,
      responsive: [{
        breakpoint: 579,
        settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
      }]
  }

  function runSlick(slider) {
    if (jQuery(slider).find('.product').length <= slidesToScrollCustom) {
      jQuery(slider).slick(slickSettings);
    } else {
      jQuery(slider).slick(slickSettingsWithDots);
    }
  }

  runSlick('#products-slider-1');
  runSlick('#products-slider-2');
}

function initProductListSlider () {
  if (jQuery('.products-list').lenght) return;

  var productSection = jQuery('.products-list'),
      productContainer = productSection.find('.products-list-container'),
      productList = productSection.find('.product'),
      productPagination = productSection.find('.pagination');

  var slideShow = 8;

  // if (productList.lenght > slideShow) return;

  productContainer.on('init', function () {
    jQuery(this).removeClass('flex hsb vt');
  })

  productContainer.slick({
    infinite: true,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    swipe: false,
    appendArrows: productPagination,
    prevArrow: '<div class="al"><button class="btn btn-link btn-sm">Prev</button></div>',
    nextArrow: '<div class="ar"><button class="btn btn-link btn-sm">Next</button></div>',
  })

  var breakpoint = [
    { min: 320, curent: 2 },
    { min: 375, curent: 3 },
    { min: 480, curent: 4 },
    { min: 667, curent: 5 },
    { min: 768, curent: 6 },
    { min: 992, curent: 8 },
  ];

  function setSlideShow () {
    for (var i = 0; i < breakpoint.length; i++) {
      for (var key in breakpoint[i]) {
        if ( window.matchMedia("("+key+"-width: "+breakpoint[i][key]+"px)").matches ) {
          slideShow = breakpoint[i].curent;
        }
      }
    }

    productContainer.slick('slickSetOption', {slidesToShow: slideShow});
    productContainer.slick('refresh')
  }

  jQuery(window).bind('resize orientationchange', setSlideShow);
  setSlideShow();

}

function checkDevice () {
  var browser = jQuery.browser;

  var body = jQuery('body');

  var iphone = browser.iphone,
      ipad = browser.ipad,
      android = browser.android,
      chrome = browser.chrome,
      safari = browser.safari,
      firefox = browser.mozilla;
      edge = browser.msedge;

  var version = browser.versionNumber;

  if ( jQuery('.preview').length ) {
    if (browser.desktop) {
      jQuery('body').addClass('desktop');

      if ( (safari && version > 9) || (chrome && version > 56) || (firefox && version > 59) ) {
        initScrollMagic();
      } else {
        jQuery('body').addClass('simply');
      }

    } else if (browser.mobile) {
      jQuery('body').addClass('mobile');

      if ( (safari && version > 10) || (chrome && version > 60) ) {
        initScrollMagic();
      } else {
        jQuery('body').addClass('simply');
      }

    }
  }


  // if ( jQuery('.preview').length ) {
  //   // Check support
  //   if ( (iphone && safari && version > 10) || (ipad && safari && version > 10) || (desktop && safari && version > 9) || (desktop && chrome && version > 56) || (desktop && firefox && version > 59) || (android && chrome && version > 60) ) {
  //     initScrollMagic();
  //     console.log('start animation');
  //   } else {
  //     jQuery('body').addClass('simply');
  //   }
  // }


  // if (desktop) {
  //   jQuery('body').addClass('desktop');
  // } else if (mobile) {
  //   jQuery('body').addClass('mobile');
  // }

}

function initScrollMagic () {

  // init controller
  var controller = new ScrollMagic.Controller({
    // globalSceneOptions: {
    //   addIndicators: false
    // }
  });

  // helpers

  function createScene(el, dur, hook, offset) {
    return new ScrollMagic.Scene({
      triggerElement: el,
      duration: dur || 0,
      offset: offset || 0,
      triggerHook: hook
    })
  }

  function createTimeline(params) {
    return new TimelineMax(params);
  }

  // animation

  var previewScreen = jQuery('.preview');

  previewScreen.each(function (index) {
    var el = jQuery(this),
        elId = '#' + el.attr('id');

    var video = el.find('.preview-video-container video').get(0);

    var scene_1 = createScene(elId, 194, 0, 20);

    var tl_1 = createTimeline({
      onStart: function () {
        video.play();
      }
    });


    var easeFunc = Power0.easeNone;
    var borderTop = el.find('.v-border-top'),
        borderLeft = el.find('.v-border-left'),
        borderRight = el.find('.v-border-right'),
        borderBottom = el.find('.v-border-bottom');

    tl_1
      .to(borderTop, .2, {scaleY: 0, ease: easeFunc})
      .to(borderLeft, .2, {scaleX: 0, ease: easeFunc}, '-=.2')
      .to(borderRight, .2, {scaleX: 0, ease: easeFunc}, '-=.2')
      .to(borderBottom, .2, {scaleY: 0, ease: easeFunc}, '-=.2')

    scene_1
      .setTween(tl_1)
      .addTo(controller);


    // text
    var scene_4 = createScene(elId, 0, 0);
    var tl_4 = createTimeline();

    var scene_4_el = el.find('.headline').children();

    function scene_4_stagger (index, target, list) {
      // return (.14 * index) + 1.8;
      // return (.14 * index) + .6;

      return (.14 * index);
    }


    tl_4
      // .staggerFromTo(scene_4_el, 2, {opacity: 0, 'transform': 'translate3d(0px,'+ 60+'px, 0px)', ease: Power2.easeIn}, {opacity: 1, 'transform': 'translate3d(0px,'+ 0+'px, 0px)', ease: Power2.easeOut}, scene_4_stager)

      .staggerFromTo(scene_4_el, 1, {y: 60, ease: Power2.easeIn}, {y: 0, ease: Power2.easeOut}, scene_4_stagger)
      .staggerFromTo(scene_4_el, 1, {opacity: 0, ease: Power2.easeIn}, {opacity: 1, ease: Power2.easeOut}, scene_4_stagger, 0)



    scene_4
      .setTween(tl_4)
      .addTo(controller);

    // overlay
    var scene_5 = createScene(elId, 200, 0, 80);
    var tl_5 = createTimeline();

    tl_5
      .to(el.find('.preview-overlay'), 1, {opacity: 1, ease: Power2.easeOut})

    scene_5
      .setTween(tl_5)
      .addTo(controller);

    // video
    var scene_6 = createScene(elId + ' .preview-content', '100%', 0, 0);
    var tl_6 = createTimeline();

    tl_6
      .to(el.find('.preview-video-container'), .6, {y: 250, ease: Power0.easeNone})

    scene_6
      .setClassToggle(elId +" .preview-video-container", "will-change")
      .setTween(tl_6)
      .addTo(controller);

    // will-change
    var scene_7 = createScene(elId, '100%', 0, 0);

    scene_7
      .setClassToggle(elId+" .preview-overlay, "+elId+" .v-border", "will-change")
      .addTo(controller);

    // will-change-group
    var scene_8 = createScene(elId, '100%', 0, 0);

    scene_8
      .setClassToggle(elId+" .preview-content", "will-change-group")
      .addTo(controller);

  });

}

function initVideoPopUp () {
  if (!jQuery('.play').length) return;

  var videoItem = jQuery(".play").not('.play-amazon');

  videoItem.fancybox({
    maxWidth	: 860,
		// maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: 'auto',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
    padding : 0,
    type: 'iframe',
    helpers: {
      media: true
    },
    beforeLoad: function (e) {
      var url = this.href.replace(new RegExp("watch\\?v=", "i"), 'v/');
      this.href = url + '?autoplay=1';
    },
  });

  jQuery('.play-amazon').fancybox({
    maxWidth  : 860,
    // maxHeight  : 600,
    fitToView : false,
    width   : '100%',
    height    : 'auto',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none',
    padding : 0,
    type: 'iframe',
    helpers: {
      media: true
    },
    afterLoad: function(){
      this.content.find('video').trigger('play');
    },
  });

}

function initIsotopeGrid () {
  if (!jQuery('.grid').length) return;

  var grid = jQuery('.grid');

  var itemList = grid.find('.item');

  itemList.each(function (index) {
    jQuery(this).attr('data-order', index + 1);
  })

  grid.isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.item',
    percentPosition: true,
    layoutMode: 'packery',
    masonry: {
    //   // use element for option
      columnWidth: '.grid-sizer',
    //   fitWidth: true
    },
    getSortData: {
      order: '[data-order] parseInt'
    },
    sortBy : 'order',
  })

  jQuery('.filter [data-filter]').on('click', function() {
    jQuery('.filter [data-filter]').removeClass('is-active');

    var filterValue = jQuery( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterValue === 'all' ?  '*' : '.item-' + filterValue;
    grid.isotope({ filter: filterValue });


    jQuery( this ).addClass('is-active');
  });

}

function CanvasLeftMenu (stateStatus) {
  var openBtn = jQuery('.canvasOpen');
  var nav = jQuery('.nav');

  var state = stateStatus;

  if (state == undefined) {
  	var state = 'hide';
  }

  function menuHandler () {
    if (state === 'hide') {
      nav.addClass('is-active');
      state = 'show';
    } else {
      nav.removeClass('is-active');
      state = 'hide';
    }
  }

  openBtn.click(menuHandler);

  jQuery('.nav-list a').click(function() {
  	nav.removeClass('is-active');
    state = 'hide';
  });

  nav.click(function (e) {
    if (e.target.classList.contains('nav-bg') ) {
      nav.removeClass('is-active');
      state = 'hide';
    }
  });
}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------