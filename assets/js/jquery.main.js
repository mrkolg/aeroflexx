// Docs: https://greensock.com/docs
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope;

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------
// content tabs init
function initTabs() {
    jQuery(".product-comparison-tabset").tabset({
        tabLinks: "a",
        addToParent: !0,
        defaultTab: !0
    });
}

function animationScroll() {
    if (jQuery(".nav-list a").click(function() {
        var ankhor = jQuery(this.hash);
        0 < ankhor.length && jQuery("html, body").animate({
            scrollTop: ankhor.offset().top
        }, 300);
    }), window.location.hash) {
        var ankhor = jQuery(window.location.hash);
        return 0 < jQuery(ankhor).length && jQuery("html, body").animate({
            scrollTop: ankhor.offset().top
        }, 300), !1;
    }
}

function initCustomScroll() {
    jQuery(".wpcf7 textarea").scrollbar();
}

// slick init
function initSlickCarousel() {
    if (!jQuery(".products-links-slider").lenght) {
        var slickSettings = {
            slidesToScroll: 4,
            rows: 0,
            slidesToShow: 4,
            arrows: !1,
            dots: !1,
            dotsClass: "products-links-pag",
            responsive: [ {
                breakpoint: 579,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            } ]
        }, slickSettingsWithDots = {
            slidesToScroll: 4,
            rows: 0,
            slidesToShow: 4,
            arrows: !1,
            dots: !0,
            dotsClass: "products-links-pag",
            responsive: [ {
                breakpoint: 579,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            } ]
        };
        runSlick("#products-slider-1"), runSlick("#products-slider-2");
    }
    function runSlick(slider) {
        jQuery(slider).find(".product").length <= 4 ? jQuery(slider).slick(slickSettings) : jQuery(slider).slick(slickSettingsWithDots);
    }
}

function initProductListSlider() {
    if (!jQuery(".products-list").lenght) {
        var productSection = jQuery(".products-list"), productContainer = productSection.find(".products-list-container"), productPagination = (productSection.find(".product"), 
        productSection.find(".pagination")), slideShow = 8;
        // if (productList.lenght > slideShow) return;
        productContainer.on("init", function() {
            jQuery(this).removeClass("flex hsb vt");
        }), productContainer.slick({
            infinite: !0,
            slidesToShow: slideShow,
            slidesToScroll: 1,
            swipe: !1,
            appendArrows: productPagination,
            prevArrow: '<div class="al"><button class="btn btn-link btn-sm">Prev</button></div>',
            nextArrow: '<div class="ar"><button class="btn btn-link btn-sm">Next</button></div>'
        });
        var breakpoint = [ {
            min: 320,
            curent: 2
        }, {
            min: 375,
            curent: 3
        }, {
            min: 480,
            curent: 4
        }, {
            min: 667,
            curent: 5
        }, {
            min: 768,
            curent: 6
        }, {
            min: 992,
            curent: 8
        } ];
        jQuery(window).bind("resize orientationchange", setSlideShow), setSlideShow();
    }
    function setSlideShow() {
        for (var i = 0; i < breakpoint.length; i++) for (var key in breakpoint[i]) window.matchMedia("(" + key + "-width: " + breakpoint[i][key] + "px)").matches && (slideShow = breakpoint[i].curent);
        productContainer.slick("slickSetOption", {
            slidesToShow: slideShow
        }), productContainer.slick("refresh");
    }
}

function checkDevice() {
    var browser = jQuery.browser, chrome = (jQuery("body"), browser.iphone, browser.ipad, 
    browser.android, browser.chrome), safari = browser.safari, firefox = browser.mozilla;
    edge = browser.msedge;
    var version = browser.versionNumber;
    jQuery(".preview").length && (browser.desktop ? (jQuery("body").addClass("desktop"), 
    safari && 9 < version || chrome && 56 < version || firefox && 59 < version ? initScrollMagic() : jQuery("body").addClass("simply")) : browser.mobile && (jQuery("body").addClass("mobile"), 
    safari && 10 < version || chrome && 60 < version ? initScrollMagic() : jQuery("body").addClass("simply")));
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

function initScrollMagic() {
    // init controller
    var controller = new ScrollMagic.Controller({});
    // helpers
        function createScene(el, dur, hook, offset) {
        return new ScrollMagic.Scene({
            triggerElement: el,
            duration: dur || 0,
            offset: offset || 0,
            triggerHook: hook
        });
    }
    function createTimeline(params) {
        return new TimelineMax(params);
    }
    // animation
        jQuery(".preview").each(function(index) {
        var el = jQuery(this), elId = "#" + el.attr("id"), video = el.find(".preview-video-container video").get(0), scene_1 = createScene(elId, 194, 0, 20), tl_1 = createTimeline({
            onStart: function() {
                video.play();
            }
        }), easeFunc = Power0.easeNone, borderTop = el.find(".v-border-top"), borderLeft = el.find(".v-border-left"), borderRight = el.find(".v-border-right"), borderBottom = el.find(".v-border-bottom");
        tl_1.to(borderTop, .2, {
            scaleY: 0,
            ease: easeFunc
        }).to(borderLeft, .2, {
            scaleX: 0,
            ease: easeFunc
        }, "-=.2").to(borderRight, .2, {
            scaleX: 0,
            ease: easeFunc
        }, "-=.2").to(borderBottom, .2, {
            scaleY: 0,
            ease: easeFunc
        }, "-=.2"), scene_1.setTween(tl_1).addTo(controller);
        // text
        var scene_4 = createScene(elId, 0, 0), tl_4 = createTimeline(), scene_4_el = el.find(".headline").children();
        function scene_4_stagger(index, target, list) {
            // return (.14 * index) + 1.8;
            // return (.14 * index) + .6;
            return .14 * index;
        }
        tl_4.staggerFromTo(scene_4_el, 1, {
            y: 60,
            ease: Power2.easeIn
        }, {
            y: 0,
            ease: Power2.easeOut
        }, scene_4_stagger).staggerFromTo(scene_4_el, 1, {
            opacity: 0,
            ease: Power2.easeIn
        }, {
            opacity: 1,
            ease: Power2.easeOut
        }, scene_4_stagger, 0), scene_4.setTween(tl_4).addTo(controller);
        // overlay
        var scene_5 = createScene(elId, 200, 0, 80), tl_5 = createTimeline();
        tl_5.to(el.find(".preview-overlay"), 1, {
            opacity: 1,
            ease: Power2.easeOut
        }), scene_5.setTween(tl_5).addTo(controller);
        // video
        var scene_6 = createScene(elId + " .preview-content", "100%", 0, 0), tl_6 = createTimeline();
        tl_6.to(el.find(".preview-video-container"), .6, {
            y: 250,
            ease: Power0.easeNone
        }), scene_6.setClassToggle(elId + " .preview-video-container", "will-change").setTween(tl_6).addTo(controller), 
        createScene(elId, "100%", 0, 0).setClassToggle(elId + " .preview-overlay, " + elId + " .v-border", "will-change").addTo(controller), 
        createScene(elId, "100%", 0, 0).setClassToggle(elId + " .preview-content", "will-change-group").addTo(controller);
    });
}

function initVideoPopUp() {
    jQuery(".play").length && (jQuery(".play").not(".play-amazon").fancybox({
        maxWidth: 860,
        // maxHeight	: 600,
        fitToView: !1,
        width: "100%",
        height: "auto",
        autoSize: !1,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none",
        padding: 0,
        type: "iframe",
        helpers: {
            media: !0
        },
        beforeLoad: function(e) {
            var url = this.href.replace(new RegExp("watch\\?v=", "i"), "v/");
            this.href = url + "?autoplay=1";
        }
    }), jQuery(".play-amazon").fancybox({
        maxWidth: 860,
        // maxHeight  : 600,
        fitToView: !1,
        width: "100%",
        height: "auto",
        autoSize: !1,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none",
        padding: 0,
        type: "iframe",
        helpers: {
            media: !0
        },
        afterLoad: function() {
            this.content.find("video").trigger("play");
        }
    }));
}

function initIsotopeGrid() {
    if (jQuery(".grid").length) {
        var grid = jQuery(".grid");
        grid.find(".item").each(function(index) {
            jQuery(this).attr("data-order", index + 1);
        }), grid.isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: ".item",
            percentPosition: !0,
            layoutMode: "packery",
            masonry: {
                //   // use element for option
                columnWidth: ".grid-sizer"
            },
            getSortData: {
                order: "[data-order] parseInt"
            },
            sortBy: "order"
        }), jQuery(".filter [data-filter]").on("click", function() {
            jQuery(".filter [data-filter]").removeClass("is-active");
            var filterValue = jQuery(this).attr("data-filter");
            // use filterFn if matches value
                        filterValue = "all" === filterValue ? "*" : ".item-" + filterValue, 
            grid.isotope({
                filter: filterValue
            }), jQuery(this).addClass("is-active");
        });
    }
}

function CanvasLeftMenu(stateStatus) {
    var openBtn = jQuery(".canvasOpen"), nav = jQuery(".nav");
    if (null == (state = stateStatus)) var state = "hide";
    openBtn.click(function() {
        state = "hide" === state ? (nav.addClass("is-active"), "show") : (nav.removeClass("is-active"), 
        "hide");
    }), jQuery(".nav-list a").click(function() {
        nav.removeClass("is-active"), state = "hide";
    }), nav.click(function(e) {
        e.target.classList.contains("nav-bg") && (nav.removeClass("is-active"), state = "hide");
    });
}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
jQuery(function() {
    CanvasLeftMenu(), initVideoPopUp(), checkDevice(), initProductListSlider(), initCustomScroll(), 
    initTabs(), initSlickCarousel();
}), jQuery(window).on("load", function() {
    jQuery("body").addClass("page-loaded"), initIsotopeGrid(), animationScroll();
}), function($) {
    "use strict";
    function Tabset($holder, options) {
        this.$holder = $holder, this.options = options, this.init();
    }
    Tabset.prototype = {
        init: function() {
            this.$tabLinks = this.$holder.find(this.options.tabLinks), this.setStartActiveIndex(), 
            this.setActiveTab(), this.options.autoHeight && (this.$tabHolder = $(this.$tabLinks.eq(0).attr(this.options.attrib)).parent()), 
            this.makeCallback("onInit", this);
        },
        setStartActiveIndex: function() {
            var activeIndex, $classTargets = this.getClassTarget(this.$tabLinks), $activeLink = $classTargets.filter("." + this.options.activeClass), $hashLink = this.$tabLinks.filter("[" + this.options.attrib + '="' + location.hash + '"]');
            this.options.checkHash && $hashLink.length && ($activeLink = $hashLink), activeIndex = $classTargets.index($activeLink), 
            this.activeTabIndex = this.prevTabIndex = -1 === activeIndex ? this.options.defaultTab ? 0 : null : activeIndex;
        },
        setActiveTab: function() {
            var self = this;
            this.$tabLinks.each(function(i, link) {
                var $link = $(link), $classTarget = self.getClassTarget($link), $tab = $($link.attr(self.options.attrib));
                i !== self.activeTabIndex ? ($classTarget.removeClass(self.options.activeClass), 
                $tab.addClass(self.options.tabHiddenClass).removeClass(self.options.activeClass)) : ($classTarget.addClass(self.options.activeClass), 
                $tab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass)), 
                self.attachTabLink($link, i);
            });
        },
        attachTabLink: function($link, i) {
            var self = this;
            $link.on(this.options.event + ".tabset", function(e) {
                e.preventDefault(), self.activeTabIndex === self.prevTabIndex && self.activeTabIndex !== i && (self.activeTabIndex = i, 
                self.switchTabs()), self.options.checkHash && (location.hash = jQuery(this).attr("href").split("#")[1]);
            });
        },
        resizeHolder: function(height) {
            var self = this;
            height ? (this.$tabHolder.height(height), setTimeout(function() {
                self.$tabHolder.addClass("transition");
            }, 10)) : self.$tabHolder.removeClass("transition").height("");
        },
        switchTabs: function() {
            var self = this, $prevLink = this.$tabLinks.eq(this.prevTabIndex), $nextLink = this.$tabLinks.eq(this.activeTabIndex), $prevTab = this.getTab($prevLink), $nextTab = this.getTab($nextLink);
            $prevTab.removeClass(this.options.activeClass), self.haveTabHolder() && this.resizeHolder($prevTab.outerHeight()), 
            setTimeout(function() {
                self.getClassTarget($prevLink).removeClass(self.options.activeClass), $prevTab.addClass(self.options.tabHiddenClass), 
                $nextTab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass), 
                self.getClassTarget($nextLink).addClass(self.options.activeClass), self.haveTabHolder() ? (self.resizeHolder($nextTab.outerHeight()), 
                setTimeout(function() {
                    self.resizeHolder(), self.prevTabIndex = self.activeTabIndex, self.makeCallback("onChange", self);
                }, self.options.animSpeed)) : self.prevTabIndex = self.activeTabIndex;
            }, this.options.autoHeight ? this.options.animSpeed : 1);
        },
        getClassTarget: function($link) {
            return this.options.addToParent ? $link.parent() : $link;
        },
        getActiveTab: function() {
            return this.getTab(this.$tabLinks.eq(this.activeTabIndex));
        },
        getTab: function($link) {
            return $($link.attr(this.options.attrib));
        },
        haveTabHolder: function() {
            return this.$tabHolder && this.$tabHolder.length;
        },
        destroy: function() {
            var self = this;
            this.$tabLinks.off(".tabset").each(function() {
                var $link = $(this);
                self.getClassTarget($link).removeClass(self.options.activeClass), $($link.attr(self.options.attrib)).removeClass(self.options.activeClass + " " + self.options.tabHiddenClass);
            }), this.$holder.removeData("Tabset");
        },
        makeCallback: function(name) {
            if ("function" == typeof this.options[name]) {
                var args = Array.prototype.slice.call(arguments);
                args.shift(), this.options[name].apply(this, args);
            }
        }
    }, $.fn.tabset = function(opt) {
        var args = Array.prototype.slice.call(arguments), method = args[0], options = $.extend({
            activeClass: "active",
            addToParent: !1,
            autoHeight: !1,
            checkHash: !1,
            defaultTab: !0,
            animSpeed: 500,
            tabLinks: "a",
            attrib: "href",
            event: "click",
            tabHiddenClass: "js-tab-hidden"
        }, opt);
        return options.autoHeight = options.autoHeight, this.each(function() {
            var $holder = jQuery(this), instance = $holder.data("Tabset");
            "object" == typeof opt || void 0 === opt ? $holder.data("Tabset", new Tabset($holder, options)) : "string" == typeof method && instance && "function" == typeof instance[method] && (args.shift(), 
            instance[method].apply(instance, args));
        });
    };
}(jQuery, jQuery(window)), function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function(t) {
            return "string" != typeof t ? (function(t, e) {
                t.each(function(t, o) {
                    var n = a.data(o, i);
                    n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
                });
            }(this, t), this) : function(t, e, o) {
                var n, s = "$()." + i + '("' + e + '")';
                return t.each(function(t, u) {
                    var h = a.data(u, i);
                    if (h) {
                        var d = h[e];
                        if (d && "_" != e.charAt(0)) {
                            var l = d.apply(h, o);
                            n = void 0 === n ? l : n;
                        } else r(s + " is not a valid method");
                    } else r(i + " not initialized. Cannot call methods, i.e. " + s);
                }), void 0 !== n ? n : t;
            }(this, t, n.call(arguments, 1));
        }, o(a));
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }
    var n = Array.prototype.slice, s = t.console, r = void 0 === s ? function() {} : function(t) {
        s.error(t);
    };
    return o(e || t.jQuery), i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, o = i[t] = i[t] || [];
            return -1 == o.indexOf(e) && o.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this;
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return -1 != o && i.splice(o, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n];
                o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e);
            }
            return this;
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents;
    }, t;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), 
        e;
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
            e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
        }
    }
    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return function() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < h; e++) {
                    t[u[e]] = 0;
                }
                return t;
            }();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l], c = s[f], m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m;
            }
            var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width);
            !1 !== x && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return !1 !== S && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), 
            a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, 
            a;
        }
    }
    var r, a = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t);
    }, u = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], h = u.length, d = !1;
    return s;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n;
        }
    }();
    return function(e, i) {
        return e[t](i);
    };
}), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function(t, e) {
    var i = {
        extend: function(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        modulo: function(t, e) {
            return (t % e + e) % e;
        }
    }, o = Array.prototype.slice;
    i.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? o.call(t) : [ t ];
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
    }, i.getParent = function(t, i) {
        for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, i)) return t;
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
            }
        }), n;
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e], n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments, s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n];
            }, i);
        };
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s);
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                }
                var u = new e(t, i);
                l && l.data(t, o, u);
            });
        });
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, 
    t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function(t, e) {
    "use strict";
    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create());
    }
    var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r], h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }, d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        });
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, d.getSize = function() {
        this.size = e(this.element);
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            e[h[i] || i] = t[i];
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
        -1 != o.indexOf("%") && (s = s / 100 * a.width), -1 != n.indexOf("%") && (r = r / 100 * a.height), 
        s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, 
        r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
    }, d.layoutPosition = function() {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [ this ]);
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !n || this.isTransitioning) {
            var s = t - i, r = e - o, a = {};
            a.transform = this.getTranslate(s, r), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            });
        } else this.layoutPosition();
    }, d.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this);
    }, d.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                0;
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
        } else this._nonTransition(t);
    };
    var l = "opacity," + function(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase();
        });
    }(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1);
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t);
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn, o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], function(t) {
                for (var e in t) return;
                return 1;
            }(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", 
            delete e.clean[o]), o in e.onEnd) e.onEnd[o].call(this), delete e.onEnd[o];
            this.emitEvent("transitionEnd", [ this ]);
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c);
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [ this ]);
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, 
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, 
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"));
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }, o;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], function(i, o, n, s) {
        return e(t, i, o, n, s);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (i) {
            this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), 
            this.option(e);
            var n = ++l;
            this.element.outlayerGUID = n, (f[n] = this)._create(), this._getOption("initLayout") && this.layout();
        } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    function r(t) {
        function e() {
            t.apply(this, arguments);
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e;
    }
    function d() {}
    var u = t.console, h = t.jQuery, l = 0, f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t);
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), 
        this._getOption("resize") && this.bindResize();
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var r = new i(e[n], this);
            o.push(r);
        }
        return o;
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector);
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element;
        });
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize();
    }, c.getSize = function() {
        this.size = i(this.element);
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), 
        this[t] = o ? i(o)[e] : n) : this[t] = 0;
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored;
        });
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
            }, this), this._processLayoutQueue(i);
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
            return i.length ? (i = parseFloat(i)) * (m[o] || 1) : 0;
        }(t), this.stagger);
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, c._postLayout = function() {
        this.resizeContainer();
    }, c.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
            t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [ e ]);
        }
        function o() {
            ++r == s && i();
        }
        var n = this, s = e.length;
        if (e && s) {
            var r = 0;
            e.forEach(function(e) {
                e.once(t, o);
            });
        } else i();
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [ e ].concat(i) : i;
        if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), 
        e) {
            var n = h.Event(e);
            n.type = t, this.$element.trigger(n, i);
        } else this.$element.trigger(t, i);
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
    }, c.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, c.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t);
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t);
        return {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, c.onresize = function() {
        this.resize();
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, c.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), 
            this.reveal(e), this.layoutItems(i);
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i;
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i);
        }, this), e;
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t);
        }, this);
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy();
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
    }, s.data = function(t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && f[e];
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), 
        i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), 
        i;
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", [ "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, 
    t.Isotope.Item = e(t.Outlayer));
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments);
    }
    var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this);
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        });
    }, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", [ "get-size/get-size", "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, 
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function(t, e) {
    "use strict";
    function i(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, 
        this.items = t.filteredItems, this.size = t.size);
    }
    var o = i.prototype;
    return [ "_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption" ].forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments);
        };
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight;
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
    }, o.getSegmentSize = function(t, e) {
        var i = t + e, o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e];
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments);
        }
        return (n.prototype = Object.create(o)).constructor = n, e && (n.options = e), i.modes[n.prototype.namespace = t] = n;
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", [ "outlayer/outlayer", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
        this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0;
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }
        var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o;
        s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1);
    }, o.getContainerWidth = function() {
        var i = this._getOption("fitWidth") ? this.element.parentNode : this.element, o = e(i);
        this.containerWidth = o && o.innerWidth;
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, o = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r;
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        };
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e;
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < t && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        };
    }, o._manageStamp = function(t) {
        var i = e(t), o = this._getElementOffset(t), s = this._getOption("originLeft") ? o.left : o.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var d = (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), 
        t;
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", [ "../layout-mode", "masonry-layout/masonry" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"), o = i.prototype, n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this);
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", [ "../layout-mode" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, 
        o;
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        };
    }, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", [ "../layout-mode" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    }), i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0;
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        };
    }, i._getContainerSize = function() {
        return {
            height: this.y
        };
    }, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical" ], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function(t, e, i, o, n, s, r) {
    var u = t.jQuery, h = String.prototype.trim ? function(t) {
        return t.trim();
    } : function(t) {
        return t.replace(/^\s+|\s+$/g, "");
    }, d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), 
        this.modes = {}, this.filteredItems = this.items, this.sortHistory = [ "original-order" ], 
        r.modes) this._initLayoutMode(t);
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), 
        this._isLayoutInited = !0;
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [ e ]) : this._hideReveal(e), 
        this._sort(), this._layout();
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e;
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [ n.filteredItems ]);
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t();
        }), this.once("hideComplete", function() {
            i = !0, t();
        }), this.once("revealComplete", function() {
            o = !0, t();
        });
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        };
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function(e) {
            return t(e.element);
        } : function(e) {
            return o(e.element, t);
        };
    }, l.updateSortData = function(t) {
        var e;
        e = t ? (t = n.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), 
        this._updateItemsSortData(e);
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i);
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData();
        }
    };
    var f = function(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = function(t, e) {
            return t ? function(e) {
                return e.getAttribute(t);
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent;
            };
        }(n && n[1], o), a = d.sortDataParsers[i[1]];
        return a ? function(t) {
            return t && a(r(t));
        } : function(t) {
            return t && r(t);
        };
    };
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10);
        },
        parseFloat: function(t) {
            return parseFloat(t);
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = function(t, e) {
                return function(i, o) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n], r = i.sortData[s], a = o.sortData[s];
                        if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1);
                    }
                    return 0;
                };
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e);
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0;
    }, l._mode = function() {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e;
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t);
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t);
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize();
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i);
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), 
            this.items = e.concat(this.items);
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), 
        e.matches;
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s);
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s);
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random();
        }
        this.options.sortBy = "random", this._sort(), this._layout();
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o;
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element;
        });
    }, d;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {}, 
    a.Packery.Rect = b());
}(window, function() {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c];
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var b = a.prototype;
    return b.contains = function(a) {
        var b = a.width || 0, c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c;
    }, b.overlaps = function(a) {
        var b = this.x + this.width, c = this.y + this.height, d = a.x + a.width, e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y;
    }, b.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b)) return !1;
        var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }), d.push(c)), g < e && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }), d.push(c)), h < f && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }), d.push(c)), this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }), d.push(c)), d;
    }, b.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height;
    }, a;
}), function(a, b) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", [ "./rect" ], b); else if ("object" == typeof module && module.exports) module.exports = b(require("./rect")); else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect);
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", 
        this.reset();
    }
    var c = b.prototype;
    c.reset = function() {
        this.spaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight;
    }, c.pack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.canFit(a)) {
                this.placeInSpace(a, c);
                break;
            }
        }
    }, c.columnPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01) {
                a.y = c.y, this.placed(a);
                break;
            }
        }
    }, c.rowPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01) {
                a.x = c.x, this.placed(a);
                break;
            }
        }
    }, c.placeInSpace = function(a, b) {
        a.x = b.x, a.y = b.y, this.placed(a);
    }, c.placed = function(a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
            var d = this.spaces[c], e = d.getMaximalFreeRects(a);
            e ? b.push.apply(b, e) : b.push(d);
        }
        this.spaces = b, this.mergeSortSpaces();
    }, c.mergeSortSpaces = function() {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
    }, c.addSpace = function(a) {
        this.spaces.push(a), this.mergeSortSpaces();
    }, b.mergeRects = function(a) {
        var b = 0, c = a[b];
        a: for (;c; ) {
            for (var d = 0, e = a[b + d]; e; ) {
                if (e == c) d++; else {
                    if (e.contains(c)) {
                        a.splice(b, 1), c = a[b];
                        continue a;
                    }
                    c.contains(e) ? a.splice(b + d, 1) : d++;
                }
                e = a[b + d];
            }
            c = a[++b];
        }
        return a;
    };
    var d = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x;
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y;
        }
    };
    return b;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", [ "outlayer/outlayer", "./rect" ], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect);
}(window, function(a, b) {
    function e() {
        a.Item.apply(this, arguments);
    }
    var d = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform", f = e.prototype = Object.create(a.Item.prototype), g = f._create;
    f._create = function() {
        g.call(this), this.rect = new b();
    };
    var h = f.moveTo;
    return f.moveTo = function(a, b) {
        var c = Math.abs(this.position.x - a), d = Math.abs(this.position.y - b);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && c < 1 && d < 1 ? void this.goTo(a, b) : void h.apply(this, arguments);
    }, f.enablePlacing = function() {
        this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), 
        this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), 
        this.isPlacing = !0;
    }, f.disablePlacing = function() {
        this.isPlacing = !1;
    }, f.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), 
        this.emitEvent("remove", [ this ]);
    }, f.showDropPlaceholder = function() {
        var a = this.dropPlaceholder;
        a || ((a = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", 
        a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", 
        this.positionDropPlaceholder(), this.layout.element.appendChild(a);
    }, f.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
    }, f.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder);
    }, e;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", [ "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item" ], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item);
}(window, function(a, b, c, d, e) {
    function f(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function g(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    c.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1;
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    j._create = function() {
        b.prototype._create.call(this), this.packer = new d(), this.shiftPacker = new d(), 
        this.isEnabled = !0, this.dragItemCount = 0;
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element);
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y);
            },
            dragEnd: function() {
                a.itemDragEnd(this.element);
            }
        }, this.handleUIDraggable = {
            start: function(b, c) {
                c && a.itemDragStart(b.currentTarget);
            },
            drag: function(b, c) {
                c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
            },
            stop: function(b, c) {
                c && a.itemDragEnd(b.currentTarget);
            }
        };
    }, j._resetLayout = function() {
        var a, b, c;
        this.getSize(), this._getMeasurements(), c = this._getOption("horizontal") ? (a = 1 / 0, 
        b = this.size.innerHeight + this.gutter, "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, 
        b = 1 / 0, "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, 
        this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, 
        this.packer.reset(), this.maxY = 0, this.maxX = 0;
    }, j._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), 
        this._getMeasurement("gutter", "width");
    }, j._getItemLayoutPosition = function(a) {
        if (this._setRectSize(a.element, a.rect), this.isShifting || 0 < this.dragItemCount) {
            var b = this._getPackMethod();
            this.packer[b](a.rect);
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect;
    }, j.shiftLayout = function() {
        this.isShifting = !0, this.layout(), delete this.isShifting;
    }, j._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
    }, j._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY);
    }, j._setRectSize = function(b, c) {
        var d = a(b), e = d.outerWidth, f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), 
        c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height);
    }, j._applyGridGutter = function(a, b) {
        if (!b) return a + this.gutter;
        var c = a % (b += this.gutter);
        return Math[c && c < 1 ? "round" : "ceil"](a / b) * b;
    }, j._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        };
    }, j._manageStamp = function(a) {
        var b, d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect; else {
            var e = this._getElementOffset(a);
            b = new c({
                x: this._getOption("originLeft") ? e.left : e.right,
                y: this._getOption("originTop") ? e.top : e.bottom
            });
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
    }, j.sortItemsByPosition = function() {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a);
    }, j.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, 
        c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), 
        this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing());
    }, j._bindFitEvents = function(a) {
        function b() {
            2 == ++d && c.dispatchEvent("fitComplete", null, [ a ]);
        }
        var c = this, d = 0;
        a.once("layout", b), this.once("layoutComplete", b);
    }, j.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
    }, j.needsResizeLayout = function() {
        var b = a(this.element), c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c];
    }, j.resizeShiftPercentLayout = function() {
        var b = this._getItemsForLayout(this.items), c = this._getOption("horizontal"), d = c ? "y" : "x", e = c ? "height" : "width", f = c ? "rowHeight" : "columnWidth", g = c ? "innerHeight" : "innerWidth", h = this[f];
        if (h = h && h + this.gutter) {
            this._getMeasurements();
            var i = this[f] + this.gutter;
            b.forEach(function(a) {
                var b = Math.round(a.rect[d] / h);
                a.rect[d] = b * i;
            });
        } else {
            var j = a(this.element)[g] + this.gutter, k = this.packer[e];
            b.forEach(function(a) {
                a.rect[d] = a.rect[d] / k * j;
            });
        }
        this.shiftLayout();
    }, j.itemDragStart = function(a) {
        if (this.isEnabled) {
            this.stamp(a);
            var b = this.getItem(a);
            b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b));
        }
    }, j.updateShiftTargets = function(a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"), d = this._getOption("originTop");
        this.stamps.forEach(function(a) {
            var e = this.getItem(a);
            if (!e || !e.isPlacing) {
                var f = this._getElementOffset(a), g = new c({
                    x: b ? f.left : f.right,
                    y: d ? f.top : f.bottom
                });
                this._setRectSize(a, g), this.shiftPacker.placed(g);
            }
        }, this);
        var e = this._getOption("horizontal"), f = e ? "rowHeight" : "columnWidth", g = e ? "height" : "width";
        this.shiftTargetKeys = [], this.shiftTargets = [];
        var h, i = this[f];
        if (i = i && i + this.gutter) {
            var j = Math.ceil(a.rect[g] / i), k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
            h = (k - j) * i;
            for (var l = 0; l < k; l++) this._addShiftTarget(l * i, 0, h);
        } else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items), n = this._getPackMethod();
        m.forEach(function(a) {
            var b = a.rect;
            this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
            var c = e ? b.x + b.width : b.x, d = e ? b.y : b.y + b.height;
            if (this._addShiftTarget(c, d, h), i) for (var f = Math.round(b[g] / i), j = 1; j < f; j++) {
                var k = e ? c : b.x + i * j, l = e ? b.y + i * j : d;
                this._addShiftTarget(k, l, h);
            }
        }, this);
    }, j._addShiftTarget = function(a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && c < d)) {
            var e = a + "," + b;
            -1 != this.shiftTargetKeys.indexOf(e) || (this.shiftTargetKeys.push(e), this.shiftTargets.push({
                x: a,
                y: b
            }));
        }
    }, j.shift = function(a, b, c) {
        var d, e = 1 / 0, f = {
            x: b,
            y: c
        };
        this.shiftTargets.forEach(function(a) {
            var b = function(a, b) {
                var c = b.x - a.x, d = b.y - a.y;
                return Math.sqrt(c * c + d * d);
            }(a, f);
            b < e && (d = a, e = b);
        }), a.rect.x = d.x, a.rect.y = d.y;
    };
    j.itemDragMove = function(a, b, c) {
        function d() {
            f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
        }
        var e = this.isEnabled && this.getItem(a);
        if (e) {
            b -= this.size.paddingLeft, c -= this.size.paddingTop;
            var f = this, g = new Date();
            this._itemDragTime && g - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout), 
            this.dragTimeout = setTimeout(d, 120)) : (d(), this._itemDragTime = g);
        }
    }, j.itemDragEnd = function(a) {
        function b() {
            2 == ++d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), 
            e.dispatchEvent("dragItemPositioned", null, [ c ]));
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
            clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
            var d = 0, e = this;
            c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), 
            this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), 
            c.disablePlacing(), this.unstamp(c.element);
        }
    }, j.bindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "on");
    }, j.unbindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "off");
    }, j._bindDraggabillyEvents = function(a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd);
    }, j.bindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "on");
    }, j.unbindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "off");
    }, j._bindUIDraggableEvents = function(a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
    };
    var l = j.destroy;
    return j.destroy = function() {
        l.apply(this, arguments), this.isEnabled = !1;
    }, i.Rect = c, i.Packer = d, i;
}), function(a, b) {
    "function" == typeof define && define.amd ? define([ "isotope-layout/js/layout-mode", "packery/js/packery" ], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Isotope.LayoutMode, a.Packery);
}(window, function(a, b) {
    var c = a.create("packery"), d = c.prototype, e = {
        _getElementOffset: !0,
        _getMeasurement: !0
    };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function() {
        this.packer = this.packer || new b.Packer(), this.shiftPacker = this.shiftPacker || new b.Packer(), 
        g.apply(this, arguments);
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect(), h.call(this, a);
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this);
    };
    var j = d._getOption;
    return d._getOption = function(a) {
        return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments);
    }, c;
}), 
// Docs: http://fancyapps.com/fancybox/
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
function(t, J, f, x) {
    function v(a) {
        return a && a.hasOwnProperty && a instanceof f;
    }
    function r(a) {
        return a && "string" === f.type(a);
    }
    function G(a) {
        return r(a) && 0 < a.indexOf("%");
    }
    function m(a, c) {
        var d = parseInt(a, 10) || 0;
        return c && G(a) && (d *= b.getViewport()[c] / 100), Math.ceil(d);
    }
    function y(a, b) {
        return m(a, b) + "px";
    }
    var L = f("html"), q = f(t), p = f(J), b = f.fancybox = function() {
        b.open.apply(this, arguments);
    }, K = navigator.userAgent.match(/msie/i), D = null, u = J.createTouch !== x;
    f.extend(b, {
        version: "2.1.7",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [ 27 ],
                play: [ 32 ],
                toggle: [ 70 ]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (K ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, c) {
            if (a && (f.isPlainObject(c) || (c = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = v(a) ? f(a).get() : [ a ]), 
            f.each(a, function(d, e) {
                var g, l, h, n, m, k = {};
                "object" === f.type(e) && (e.nodeType && (e = f(e)), v(e) ? (k = {
                    href: e.data("fancybox-href") || e.attr("href"),
                    title: f("<div/>").text(e.data("fancybox-title") || e.attr("title") || "").html(),
                    isDom: !0,
                    element: e
                }, f.metadata && f.extend(!0, k, e.metadata())) : k = e), g = c.href || k.href || (r(e) ? e : null), 
                l = c.title !== x ? c.title : k.title || "", !(n = (h = c.content || k.content) ? "html" : c.type || k.type) && k.isDom && (n = (n = e.data("fancybox-type")) || ((n = e.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null)), 
                r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(e) && (n = "html", 
                h = e)), "ajax" === n && (g = (m = g.split(/\s+/, 2)).shift(), m = m.shift())), 
                h || ("inline" === n ? g ? h = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (h = e) : "html" === n ? h = g : n || g || !k.isDom || (n = "inline", 
                h = e)), f.extend(k, {
                    href: g,
                    type: n,
                    content: h,
                    title: l,
                    selector: m
                }), a[d] = k;
            }), b.opts = f.extend(!0, {}, b.defaults, c), c.keys !== x && (b.opts.keys = !!c.keys && f.extend({}, b.defaults.keys, c.keys)), 
            b.group = a, b._start(b.opts.index);
        },
        cancel: function() {
            var a = b.coming;
            a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), 
            b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), 
            a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)));
        },
        close: function(a) {
            b.cancel(), !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, 
            b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), 
            b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), 
            b._afterZoomOut())));
        },
        play: function(a) {
            function c() {
                clearTimeout(b.player.timer);
            }
            function d() {
                c(), b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
            }
            function e() {
                c(), p.unbind(".player"), b.player.isActive = !1, b.trigger("onPlayEnd");
            }
            !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, 
            p.bind({
                "onCancel.player beforeClose.player": e,
                "onUpdate.player": d,
                "beforeLoad.player": c
            }), d(), b.trigger("onPlayStart")) : e();
        },
        next: function(a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.next), b.jumpto(c.index + 1, a, "next"));
        },
        prev: function(a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.prev), b.jumpto(c.index - 1, a, "prev"));
        },
        jumpto: function(a, c, d) {
            var e = b.current;
            e && (a = m(a), b.direction = c || e.direction[a >= e.index ? "next" : "prev"], 
            b.router = d || "jumpto", e.loop && (a < 0 && (a = e.group.length + a % e.group.length), 
            a %= e.group.length), e.group[a] !== x && (b.cancel(), b._start(a)));
        },
        reposition: function(a, c) {
            var k, d = b.current, e = d ? d.wrap : null;
            e && (k = b._getPosition(c), a && "scroll" === a.type ? (delete k.position, e.stop(!0, !0).animate(k, 200)) : (e.css(k), 
            d.pos = f.extend({}, d.dim, k)));
        },
        update: function(a) {
            var c = a && a.originalEvent && a.originalEvent.type, d = !c || "orientationchange" === c;
            d && (clearTimeout(D), D = null), b.isOpen && !D && (D = setTimeout(function() {
                var e = b.current;
                e && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (d || "load" === c || "resize" === c && e.autoResize) && b._setDimension(), 
                "scroll" === c && e.canShrink || b.reposition(a), b.trigger("onUpdate"), D = null);
            }, d && !u ? 0 : 300));
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, 
            u && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), 
            b.update());
        },
        hideLoading: function() {
            p.unbind(".loading"), f("#fancybox-loading").remove();
        },
        showLoading: function() {
            var a, c;
            b.hideLoading(), a = f(b.opts.tpl.loading).click(b.cancel).appendTo("body"), p.bind("keydown.loading", function(a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel());
            }), b.defaults.fixed || (c = b.getViewport(), a.css({
                position: "absolute",
                top: .5 * c.h + c.y,
                left: .5 * c.w + c.x
            })), b.trigger("onLoading");
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1, c = {
                x: q.scrollLeft(),
                y: q.scrollTop()
            };
            return a && a.length ? (c.w = a[0].clientWidth, c.h = a[0].clientHeight) : (c.w = u && t.innerWidth ? t.innerWidth : q.width(), 
            c.h = u && t.innerHeight ? t.innerHeight : q.height()), c;
        },
        unbindEvents: function() {
            b.wrap && v(b.wrap) && b.wrap.unbind(".fb"), p.unbind(".fb"), q.unbind(".fb");
        },
        bindEvents: function() {
            var c, a = b.current;
            a && (q.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), 
            (c = a.keys) && p.bind("keydown.fb", function(d) {
                var e = d.which || d.keyCode, k = d.target || d.srcElement;
                if (27 === e && b.coming) return !1;
                d.ctrlKey || d.altKey || d.shiftKey || d.metaKey || k && (k.type || f(k).is("[contenteditable]")) || f.each(c, function(c, k) {
                    return 1 < a.group.length && k[e] !== x ? (b[c](k[e]), d.preventDefault(), !1) : -1 < f.inArray(e, k) ? (b[c](), 
                    d.preventDefault(), !1) : void 0;
                });
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(c, e, k, g) {
                for (var d = f(c.target || null), h = !1; d.length && !(h || d.is(".fancybox-skin") || d.is(".fancybox-wrap")); ) h = (h = d[0]) && !(h.style.overflow && "hidden" === h.style.overflow) && (h.clientWidth && h.scrollWidth > h.clientWidth || h.clientHeight && h.scrollHeight > h.clientHeight), 
                d = f(d).parent();
                0 !== e && !h && 1 < b.group.length && !a.canShrink && (0 < g || 0 < k ? b.prev(0 < g ? "down" : "left") : (g < 0 || k < 0) && b.next(g < 0 ? "up" : "right"), 
                c.preventDefault());
            }));
        },
        trigger: function(a, c) {
            var d, e = c || b.coming || b.current;
            if (e) {
                if (f.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), 
                !1 === d) return !1;
                e.helpers && f.each(e.helpers, function(c, d) {
                    d && b.helpers[c] && f.isFunction(b.helpers[c][a]) && b.helpers[c][a](f.extend(!0, {}, b.helpers[c].defaults, d), e);
                });
            }
            p.trigger(a);
        },
        isImage: function(a) {
            return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function(a) {
            return r(a) && a.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(a) {
            var d, e, c = {};
            if (a = m(a), !(d = b.group[a] || null)) return !1;
            if (d = (c = f.extend(!0, {}, b.opts, d)).margin, e = c.padding, "number" === f.type(d) && (c.margin = [ d, d, d, d ]), 
            "number" === f.type(e) && (c.padding = [ e, e, e, e ]), c.modal && f.extend(!0, c, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), c.autoSize && (c.autoWidth = c.autoHeight = !0), "auto" === c.width && (c.autoWidth = !0), 
            "auto" === c.height && (c.autoHeight = !0), c.group = b.group, c.index = a, b.coming = c, 
            !1 === b.trigger("beforeLoad")) b.coming = null; else {
                if (e = c.type, d = c.href, !e) return b.coming = null, !(!b.current || !b.router || "jumpto" === b.router) && (b.current.index = a, 
                b[b.router](b.direction));
                if (b.isActive = !0, "image" !== e && "swf" !== e || (c.autoHeight = c.autoWidth = !1, 
                c.scrolling = "visible"), "image" === e && (c.aspectRatio = !0), "iframe" === e && u && (c.scrolling = "scroll"), 
                c.wrap = f(c.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + c.wrapCSS).appendTo(c.parent || "body"), 
                f.extend(c, {
                    skin: f(".fancybox-skin", c.wrap),
                    outer: f(".fancybox-outer", c.wrap),
                    inner: f(".fancybox-inner", c.wrap)
                }), f.each([ "Top", "Right", "Bottom", "Left" ], function(a, b) {
                    c.skin.css("padding" + b, y(c.padding[a]));
                }), b.trigger("onReady"), "inline" === e || "html" === e) {
                    if (!c.content || !c.content.length) return b._error("content");
                } else if (!d) return b._error("href");
                "image" === e ? b._loadImage() : "ajax" === e ? b._loadAjax() : "iframe" === e ? b._loadIframe() : b._afterLoad();
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            }), b._afterLoad();
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image();
            a.onload = function() {
                this.onload = this.onerror = null, b.coming.width = this.width / b.opts.pixelRatio, 
                b.coming.height = this.height / b.opts.pixelRatio, b._afterLoad();
            }, a.onerror = function() {
                this.onload = this.onerror = null, b._error("image");
            }, a.src = b.coming.href, !0 !== a.complete && b.showLoading();
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading(), b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, d) {
                    b.coming && "abort" !== d ? b._error("ajax", a) : b.hideLoading();
                },
                success: function(c, d) {
                    "success" === d && (a.content = c, b._afterLoad());
                }
            }));
        },
        _loadIframe: function() {
            var a = b.coming, c = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", u ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (d) {}
            }), a.iframe.preload && (b.showLoading(), c.one("load", function() {
                f(this).data("ready", 1), u || f(this).bind("load.fb", b.update), f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), 
                b._afterLoad();
            })), a.content = c.appendTo(a.inner), a.iframe.preload || b._afterLoad();
        },
        _preloadImages: function() {
            var f, g, a = b.group, c = b.current, d = a.length, e = c.preload ? Math.min(c.preload, d - 1) : 0;
            for (g = 1; g <= e; g += 1) "image" === (f = a[(c.index + g) % d]).type && f.href && (new Image().src = f.href);
        },
        _afterLoad: function() {
            var d, e, k, g, l, a = b.coming, c = b.current;
            if (b.hideLoading(), a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, c)) a.wrap.stop(!0).trigger("onReset").remove(), 
            b.coming = null; else {
                switch (c && (b.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), 
                b.unbindEvents(), d = a.content, e = a.type, k = a.scrolling, f.extend(b, {
                    wrap: a.wrap,
                    skin: a.skin,
                    outer: a.outer,
                    inner: a.inner,
                    current: a,
                    previous: c
                }), g = a.href, e) {
                  case "inline":
                  case "ajax":
                  case "html":
                    a.selector ? d = f("<div>").html(d).find(a.selector) : v(d) && (d.data("fancybox-placeholder") || d.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()), 
                    d = d.show().detach(), a.wrap.bind("onReset", function() {
                        f(this).find(d).length && d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
                    }));
                    break;

                  case "image":
                    d = a.tpl.image.replace(/\{href\}/g, g);
                    break;

                  case "swf":
                    d = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', 
                    l = "", f.each(a.swf, function(a, b) {
                        d += '<param name="' + a + '" value="' + b + '"></param>', l += " " + a + '="' + b + '"';
                    }), d += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>";
                }
                v(d) && d.parent().is(a.inner) || a.inner.append(d), b.trigger("beforeShow"), a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k), 
                b._setDimension(), b.reposition(), b.isOpen = !1, b.coming = null, b.bindEvents(), 
                b.isOpened ? c.prevMethod && b.transitions[c.prevMethod]() : f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), 
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod](), b._preloadImages();
            }
        },
        _setDimension: function() {
            var d, a = b.getViewport(), c = 0, e = b.wrap, k = b.skin, g = b.inner, l = b.current;
            d = l.width;
            var x, B, v, E, C, H, D, F, I, h = l.height, n = l.minWidth, w = l.minHeight, p = l.maxWidth, q = l.maxHeight, u = l.scrolling, r = l.scrollOutside ? l.scrollbarWidth : 0, z = l.margin, A = m(z[1] + z[3]), t = m(z[0] + z[2]);
            if (e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp"), B = A + (z = m(k.outerWidth(!0) - k.width())), 
            v = t + (x = m(k.outerHeight(!0) - k.height())), E = G(d) ? (a.w - B) * m(d) / 100 : d, 
            C = G(h) ? (a.h - v) * m(h) / 100 : h, "iframe" === l.type) {
                if (I = l.content, l.autoHeight && I && 1 === I.data("ready")) try {
                    I[0].contentWindow.document.location && (g.width(E).height(9999), H = I.contents().find("body"), 
                    r && H.css("overflow-x", "hidden"), C = H.outerHeight(!0));
                } catch (M) {}
            } else (l.autoWidth || l.autoHeight) && (g.addClass("fancybox-tmp"), l.autoWidth || g.width(E), 
            l.autoHeight || g.height(C), l.autoWidth && (E = g.width()), l.autoHeight && (C = g.height()), 
            g.removeClass("fancybox-tmp"));
            if (d = m(E), h = m(C), F = E / C, n = m(G(n) ? m(n, "w") - B : n), p = m(G(p) ? m(p, "w") - B : p), 
            w = m(G(w) ? m(w, "h") - v : w), H = p, D = q = m(G(q) ? m(q, "h") - v : q), l.fitToView && (p = Math.min(a.w - B, p), 
            q = Math.min(a.h - v, q)), B = a.w - A, t = a.h - t, l.aspectRatio ? (p < d && (h = m((d = p) / F)), 
            q < h && (d = m((h = q) * F)), d < n && (h = m((d = n) / F)), h < w && (d = m((h = w) * F))) : (d = Math.max(n, Math.min(d, p)), 
            l.autoHeight && "iframe" !== l.type && (g.width(d), h = g.height()), h = Math.max(w, Math.min(h, q))), 
            l.fitToView) if (g.width(d).height(h), e.width(d + z), a = e.width(), A = e.height(), 
            l.aspectRatio) for (;(B < a || t < A) && n < d && w < h && !(19 < c++); ) h = Math.max(w, Math.min(q, h - 10)), 
            (d = m(h * F)) < n && (h = m((d = n) / F)), p < d && (h = m((d = p) / F)), g.width(d).height(h), 
            e.width(d + z), a = e.width(), A = e.height(); else d = Math.max(n, Math.min(d, d - (a - B))), 
            h = Math.max(w, Math.min(h, h - (A - t)));
            r && "auto" === u && h < C && d + z + r < B && (d += r), g.width(d).height(h), e.width(d + z), 
            a = e.width(), A = e.height(), c = (B < a || t < A) && n < d && w < h, d = l.aspectRatio ? d < H && h < D && d < E && h < C : (d < H || h < D) && (d < E || h < C), 
            f.extend(l, {
                dim: {
                    width: y(a),
                    height: y(A)
                },
                origWidth: E,
                origHeight: C,
                canShrink: c,
                canExpand: d,
                wPadding: z,
                hPadding: x,
                wrapSpace: A - k.outerHeight(!0),
                skinSpace: k.height() - h
            }), !I && l.autoHeight && w < h && h < q && !d && g.height("auto");
        },
        _getPosition: function(a) {
            var c = b.current, d = b.getViewport(), e = c.margin, f = b.wrap.width() + e[1] + e[3], g = b.wrap.height() + e[0] + e[2];
            e = {
                position: "absolute",
                top: e[0],
                left: e[3]
            };
            return c.autoCenter && c.fixed && !a && g <= d.h && f <= d.w ? e.position = "fixed" : c.locked || (e.top += d.y, 
            e.left += d.x), e.top = y(Math.max(e.top, e.top + (d.h - g) * c.topRatio)), e.left = y(Math.max(e.left, e.left + (d.w - f) * c.leftRatio)), 
            e;
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), 
            b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(c) {
                f(c.target).is("a") || f(c.target).parent().is("a") || (c.preventDefault(), b[a.closeClick ? "close" : "next"]());
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault(), b.close();
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), 
            (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), 
            b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, 
            b.play(!0)) : b.play(!1));
        },
        _afterZoomOut: function(a) {
            a = a || b.current, f(".fancybox-wrap").trigger("onReset").remove(), f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), b.trigger("afterClose", a);
        }
    }), b.transitions = {
        getOrigPosition: function() {
            var a = b.current, c = a.element, d = a.orig, e = {}, f = 50, g = 50, l = a.hPadding, h = a.wPadding, n = b.getViewport();
            return !d && a.isDom && c.is(":visible") && ((d = c.find("img:first")).length || (d = c)), 
            v(d) ? (e = d.offset(), d.is("img") && (f = d.outerWidth(), g = d.outerHeight())) : (e.top = n.y + (n.h - g) * a.topRatio, 
            e.left = n.x + (n.w - f) * a.leftRatio), "fixed" !== b.wrap.css("position") && !a.locked || (e.top -= n.y, 
            e.left -= n.x), {
                top: y(e.top - l * a.topRatio),
                left: y(e.left - h * a.leftRatio),
                width: y(f + h),
                height: y(g + l)
            };
        },
        step: function(a, c) {
            var d, e, f = c.prop, g = (e = b.current).wrapSpace, l = e.skinSpace;
            "width" !== f && "height" !== f || (d = c.end === c.start ? 1 : (a - c.start) / (c.end - c.start), 
            b.isClosing && (d = 1 - d), e = a - (e = "width" === f ? e.wPadding : e.hPadding), 
            b.skin[f](m("width" === f ? e : e - g * d)), b.inner[f](m("width" === f ? e : e - g * d - l * d)));
        },
        zoomIn: function() {
            var a = b.current, c = a.pos, d = a.openEffect, e = "elastic" === d, k = f.extend({
                opacity: 1
            }, c);
            delete k.position, e ? (c = this.getOrigPosition(), a.openOpacity && (c.opacity = .1)) : "fade" === d && (c.opacity = .1), 
            b.wrap.css(c).animate(k, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: b._afterZoomIn
            });
        },
        zoomOut: function() {
            var a = b.current, c = a.closeEffect, d = "elastic" === c, e = {
                opacity: .1
            };
            d && (e = this.getOrigPosition(), a.closeOpacity && (e.opacity = .1)), b.wrap.animate(e, {
                duration: "none" === c ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: d ? this.step : null,
                complete: b._afterZoomOut
            });
        },
        changeIn: function() {
            var g, a = b.current, c = a.nextEffect, d = a.pos, e = {
                opacity: 1
            }, f = b.direction;
            d.opacity = .1, "elastic" === c && (g = "down" === f || "up" === f ? "top" : "left", 
            "down" === f || "right" === f ? (d[g] = y(m(d[g]) - 200), e[g] = "+=200px") : (d[g] = y(m(d[g]) + 200), 
            e[g] = "-=200px")), "none" === c ? b._afterZoomIn() : b.wrap.css(d).animate(e, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            });
        },
        changeOut: function() {
            var a = b.previous, c = a.prevEffect, d = {
                opacity: .1
            }, e = b.direction;
            "elastic" === c && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px"), 
            a.wrap.animate(d, {
                duration: "none" === c ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove();
                }
            });
        }
    }, b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !u,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            var c;
            a = f.extend({}, this.defaults, a), this.overlay && this.close(), c = b.coming ? b.coming.parent : a.parent, 
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(c && c.length ? c : "body"), 
            this.fixed = !1, a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), 
            this.fixed = !0);
        },
        open: function(a) {
            var c = this;
            a = f.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), 
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update()), 
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : c.close(), 
                !1;
            }), this.overlay.css(a.css).show();
        },
        close: function() {
            q.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), 
            this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH)), 
            f(".fancybox-overlay").remove().hide(), f.extend(this, {
                overlay: null,
                fixed: !1
            });
        },
        update: function() {
            var b, a = "100%";
            this.overlay.width(a).height("100%"), K ? (b = Math.max(J.documentElement.offsetWidth, J.body.offsetWidth), 
            p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width()), this.overlay.width(a).height(p.height());
        },
        onReady: function(a, b) {
            var d = this.overlay;
            f(".fancybox-overlay").stop(!0, !0), d || this.create(a), a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), 
            b.fixed = !1), !0 === a.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function(a, b) {
            b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*:not(object)").filter(function() {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), 
            this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH)), 
            this.open(a);
        },
        onUpdate: function() {
            this.fixed || this.update();
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
        }
    }, b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var c = b.current, d = c.title, e = a.type;
            if (f.isFunction(d) && (d = d.call(c.element, c)), r(d) && "" !== f.trim(d)) {
                switch (c = f('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>"), 
                e) {
                  case "inside":
                    e = b.skin;
                    break;

                  case "outside":
                    e = b.wrap;
                    break;

                  case "over":
                    e = b.inner;
                    break;

                  default:
                    e = b.skin, c.appendTo("body"), K && c.width(c.width()), c.wrapInner('<span class="child"></span>'), 
                    b.current.margin[2] += Math.abs(m(c.css("margin-bottom")));
                }
                c["top" === a.position ? "prependTo" : "appendTo"](e);
            }
        }
    }, f.fn.fancybox = function(a) {
        var c, d = f(this), e = this.selector || "", k = function(g) {
            var k, m, l = f(this).blur(), h = c;
            g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || l.is(".fancybox-wrap") || (k = a.groupAttr || "data-fancybox-group", 
            (m = l.attr(k)) || (k = "rel", m = l.get(0)[k]), m && "" !== m && "nofollow" !== m && (h = (l = (l = e.length ? f(e) : d).filter("[" + k + '="' + m + '"]')).index(this)), 
            a.index = h, !1 !== b.open(l, a) && g.preventDefault());
        };
        return c = (a = a || {}).index || 0, e && !1 !== a.live ? p.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k) : d.unbind("click.fb-start").bind("click.fb-start", k), 
        this.filter("[data-fancybox-start=1]").trigger("click"), this;
    }, p.ready(function() {
        var a, c;
        f.scrollbarWidth === x && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = (b = a.children()).innerWidth() - b.height(99).innerWidth();
            return a.remove(), b;
        }), f.support.fixedPosition === x && (f.support.fixedPosition = function() {
            var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"), b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            return a.remove(), b;
        }()), f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        }), a = f(t).width(), L.addClass("fancybox-lock-test"), c = f(t).width(), L.removeClass("fancybox-lock-test"), 
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (c - a) + "px;}</style>").appendTo("head");
    });
}(window, document, jQuery), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    function g(a, b, c, d) {
        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, 
        this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
    }
    function o(a, b) {
        var c, d, e, f, g = [], h = [], i = 0, j = 0, k = (b = b >> 0 || 6) - 1, l = [], m = [];
        for (c in a) n(a[c], g, b);
        for (e = g.length, d = 0; d < e; d++) i += Math.sqrt(g[d]), m[f = d % b] = i, f === k && (j += i, 
        l[f = d / b >> 0] = m, h[f] = j, i = 0, m = []);
        return {
            length: j,
            lengths: h,
            segments: l
        };
    }
    var a, b, c, d, e, f, i, j, k, l, m, n, p, q;
    _gsScope._gsDefine("TweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++])) ;
            return c;
        }, e = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }, f = function(a) {
            if ("function" == typeof a) return a;
            var b = "object" == typeof a ? a : {
                each: a
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (!(t = "auto" === b.grid ? 0 : (b.grid || [ 1 / 0 ])[0])) {
                        for (r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && t < u; ) ;
                        t--;
                    }
                    for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, 
                    s = 1 / (r = 0), q = 0; q < u; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), 
                    r < p && (r = p), p < s && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (u < t ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, 
                    v.b = u < 0 ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }, g = function(a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, 
            this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._repeat && this._uncache(!0), this.render = g.prototype.render;
        }, h = 1e-8, i = c._internals, j = i.isSelector, k = i.isArray, l = g.prototype = c.to({}, .1, {}), m = [];
        g.version = "2.1.3", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, 
        g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, 
        g.render = c.render, g.distribute = f, l.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), 
            c.prototype.invalidate.call(this);
        }, l.updateTo = function(a, b) {
            var d, e = this, f = e.ratio, g = e.vars.immediateRender || a.immediateRender;
            for (d in b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, 
            e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay)), 
            a) e.vars[d] = a[d];
            if (e._initted || g) if (b) e._initted = !1, g && e.render(0, !0, !0); else if (e._gc && e._enabled(!0, !1), 
            e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), .998 < e._time / e._duration) {
                var h = e._totalTime;
                e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1);
            } else if (e._initted = !1, e._init(), 0 < e._time || g) for (var i, j = 1 / (1 - f), k = e._firstPT; k; ) i = k.s + k.c, 
            k.c *= j, k.s = i - k.c, k = k._next;
            return e;
        }, l.render = function(a, b, d) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var e, f, g, j, k, l, m, n, o, p = this, q = p._dirty ? p.totalDuration() : p._totalDuration, r = p._time, s = p._totalTime, t = p._cycle, u = p._duration, v = p._rawPrevTime;
            if (q - h <= a && 0 <= a ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 != (1 & p._cycle) ? (p._time = 0, 
            p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), 
            p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 
            0 !== u || !p._initted && p.vars.lazy && !d || (p._startTime === p._timeline._duration && (a = 0), 
            (v < 0 || a <= 0 && -h <= a || v === h && "isPause" !== p.data) && v !== a && (d = !0, 
            h < v && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : a < h ? (p._totalTime = p._time = p._cycle = 0, 
            p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && 0 < v) && (f = "onReverseComplete", 
            e = p._reversed), -h < a ? a = 0 : a < 0 && (p._active = !1, 0 !== u || !p._initted && p.vars.lazy && !d || (0 <= v && (d = !0), 
            p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 
            0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && s <= a && p._cycle--, 
            p._time = p._totalTime - p._cycle * j, p._yoyo && 0 != (1 & p._cycle) && (p._time = u - p._time, 
            (o = p._yoyoEase || p.vars.yoyoEase) && (p._yoyoEase || (!0 !== o || p._initted ? p._yoyoEase = o = !0 === o ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, 
            p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), 
            p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), 
            p._easeType && !o ? (k = p._time / u, (1 === (l = p._easeType) || 3 === l && .5 <= k) && (k = 1 - k), 
            3 === l && (k *= 2), 1 === (m = p._easePower) ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 
            p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), 
            r !== p._time || d || t !== p._cycle) {
                if (!p._initted) {
                    if (p._init(), !p._initted || p._gc) return;
                    if (!d && p._firstPT && (!1 !== p.vars.lazy && p._duration || p.vars.lazy && !p._duration)) return p._time = r, 
                    p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void (p._lazy = [ a, b ]);
                    !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u);
                }
                for (!1 !== p._lazy && (p._lazy = !1), p._active || !p._paused && p._time !== r && 0 <= a && (p._active = !0), 
                0 === s && (2 === p._initted && 0 < a && p._init(), p._startAt && (0 <= a ? p._startAt.render(a, !0, d) : f = f || "_dummyGS"), 
                !p.vars.onStart || 0 === p._totalTime && 0 !== u || (b || p._callback("onStart"))), 
                g = p._firstPT; g; ) g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, 
                g = g._next;
                p._onUpdate && (a < 0 && p._startAt && p._startTime && p._startAt.render(a, !0, d), 
                b || p._totalTime === s && !f || p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), 
                !f || p._gc && !d || (a < 0 && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), 
                e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 
                0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0));
            } else s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate"));
        }, g.to = function(a, b, c) {
            return new g(a, b, c);
        }, g.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c);
        }, g.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            new g(a, b, d);
        }, g.staggerTo = g.allTo = function(a, b, h, i, l, n, o) {
            var p, q, r, s, t = [], u = f(h.stagger || i), v = h.cycle, w = (h.startAt || m).cycle;
            for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), 
            p = (a = a || []).length - 1, r = 0; r <= p; r++) {
                for (s in q = {}, h) q[s] = h[s];
                if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), 
                w) {
                    for (s in w = q.startAt = {}, h.startAt) w[s] = h.startAt[s];
                    e(q.startAt, a, r);
                }
                q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function() {
                    h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m);
                }), t[r] = new g(a[r], b, q);
            }
            return t;
        }, g.staggerFrom = g.allFrom = function(a, b, c, d, e, f, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h);
        }, g.staggerFromTo = g.allFromTo = function(a, b, c, d, e, f, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            g.staggerTo(a, b, d, e, f, h, i);
        }, g.delayedCall = function(a, b, c, d, e) {
            return new g(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            });
        }, g.set = function(a, b) {
            return new g(a, 0, b);
        }, g.isTweening = function(a) {
            return 0 < c.getTweensOf(a, !0).length;
        };
        var n = function(a, b) {
            for (var d = [], e = 0, f = a._first; f; ) f instanceof c ? d[e++] = f : (b && (d[e++] = f), 
            e = (d = d.concat(n(f, b))).length), f = f._next;
            return d;
        }, o = g.getAllTweens = function(b) {
            return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
        };
        g.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = o(0 != e), j = i.length, k = c && d && e;
            for (h = 0; h < j; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
        }, g.killChildTweensOf = function(a, b) {
            if (null != a) {
                var e, f, h, l, m, n = i.tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a)) for (l = a.length; -1 < --l; ) g.killChildTweensOf(a[l], b); else {
                    for (h in e = [], n) for (f = n[h].target.parentNode; f; ) f === a && (e = e.concat(n[h].tweens)), 
                    f = f.parentNode;
                    for (m = e.length, l = 0; l < m; l++) b && e[l].totalTime(e[l].totalDuration()), 
                    e[l]._enabled(!1, !1);
                }
            }
        };
        function p(a, c, d, e) {
            c = !1 !== c, d = !1 !== d;
            for (var f, g, h = o(e = !1 !== e), i = c && d && e, j = h.length; -1 < --j; ) g = h[j], 
            (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
        }
        return g.pauseAll = function(a, b, c) {
            p(!0, a, b, c);
        }, g.resumeAll = function(a, b, c) {
            p(!1, a, b, c);
        }, g.globalTimeScale = function(b) {
            var d = a._rootTimeline, e = c.ticker.time;
            return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, 
            d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, 
            d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
        }, l.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio;
        }, l.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
        }, l.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return c < a && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, l.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
        }, l.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, 
            this._dirty = !1), this._totalDuration);
        }, l.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, l.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, l.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, g;
    }, !0), _gsScope._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        function m(a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c;
        }
        function n(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }
        function q(a, b, c, d) {
            var e = "immediateRender";
            return e in b || (b[e] = !(c && !1 === c[e] || d)), b;
        }
        function r(a) {
            if ("function" == typeof a) return a;
            var b = "object" == typeof a ? a : {
                each: a
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (!(t = "auto" === b.grid ? 0 : (b.grid || [ 1 / 0 ])[0])) {
                        for (r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && t < u; ) ;
                        t--;
                    }
                    for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, 
                    s = 1 / (r = 0), q = 0; q < u; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), 
                    r < p && (r = p), p < s && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (u < t ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, 
                    v.b = u < 0 ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }
        var d = function(a) {
            b.call(this, a);
            var c, d, e = this, f = e.vars;
            for (d in e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, 
            e._sortChildren = !0, e._onUpdate = f.onUpdate, f) c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
            i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
        }, e = 1e-8, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens, k = f.lazyRender, l = _gsScope._gsDefine.globals, o = g.pauseCallback = function() {}, s = d.prototype = new b();
        return d.version = "2.1.3", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, 
        s.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }, s.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, q(0, d)), e);
        }, s.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return e = q(0, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, s.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), s = r(e.stagger || f), t = e.startAt, u = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a), h(a = a || []) && (a = function(a) {
                var b, c = [], d = a.length;
                for (b = 0; b !== d; c.push(a[b++])) ;
                return c;
            }(a)), o = 0; o < a.length; o++) l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), 
            u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
        }, s.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.runBackwards = !0, this.staggerTo(a, b, q(0, c), d, e, f, g, h);
        }, s.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, this.staggerTo(a, b, q(0, d, c), e, f, g, h, i);
        }, s.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, s.set = function(a, b, d) {
            return this.add(new c(a, 0, q(0, b, null, !0)), d);
        }, d.exportRoot = function(a, b) {
            null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g, h, i = new d(a), j = i._timeline;
            for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, 
            g = j._first; g; ) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || ((f = g._startTime - g._delay) < 0 && (e = 1), 
            i.add(g, f)), g = h;
            return j.add(i, 0), e && i.totalDuration(), i;
        }, s.add = function(e, f, g, h) {
            var j, k, l, m, n, o, p = this;
            if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; l < k; l++) i(m = e[l]) && (m = new d({
                        tweens: m
                    })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), 
                    j += h;
                    return p._uncache(!0);
                }
                if ("string" == typeof e) return p.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e);
            }
            if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, 
            (!e._duration || 1e-5 < Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime) && e.render(j, !1, !1)), 
            (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for (o = (n = p).rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), 
            n = n._timeline;
            return p;
        }, s.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, 
                this;
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; -1 < --d; ) this.remove(b[d]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, s._remove = function(a, c) {
            return b.prototype._remove.call(this, a, c), this._last ? this._time > this.duration() && (this._time = this._duration, 
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, 
            this;
        }, s.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, s.insert = s.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, s.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, s.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, s.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, 
            this.add(f, a);
        }, s.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, s.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, s._parseTimeOrLabel = function(b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; -1 < --g; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
            if (f = "number" != typeof b || c ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, 
            "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f); else {
                if (-1 === (g = b.indexOf("="))) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = 1 < g ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
            }
            return Number(b) + c;
        }, s.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b);
        }, s.stop = function() {
            return this.paused(!0);
        }, s.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, s.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, s.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n, o = this, p = o._time, q = o._dirty ? o.totalDuration() : o._totalDuration, r = o._startTime, s = o._timeScale, t = o._paused;
            if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
                if (p < a) for (d = o._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), 
                d = d._next; else for (d = o._last; d && d._startTime >= a && !l; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (l = d), 
                d = d._prev;
                l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale);
            }
            if (q - e <= a && 0 <= a) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, 
            h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (a <= 0 && -e <= a || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, 
            o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 
            a = q + 1e-4; else if (a < e) if (o._totalTime = o._time = 0, -e < a && (a = 0), 
            (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (0 < o._rawPrevTime || a < 0 && 0 <= o._rawPrevTime)) && (h = "onReverseComplete", 
            f = o._reversed), a < 0) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, 
            h = "onReverseComplete") : 0 <= o._rawPrevTime && o._first && (i = !0), o._rawPrevTime = a; else {
                if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f) for (d = o._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, o._initted || (i = !0);
            } else o._totalTime = o._time = o._rawPrevTime = a;
            if (o._time !== p && o._first || c || i || l) {
                if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && 0 < a && (o._active = !0), 
                0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), 
                p <= (m = o._time)) for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t)); ) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), 
                o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g; else for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t)); ) {
                    if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                        if (l === d) {
                            for (l = d._prev; l && l.endTime() > o._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), 
                            l = l._prev;
                            l = null, o.pause(), o._pauseTime = n;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = g;
                }
                o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || r !== o._startTime && s === o._timeScale || !(0 === o._time || q >= o.totalDuration()) || (f && (j.length && k(), 
                o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
            }
        }, s._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, s.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? !1 !== b && (f[h++] = g) : (!1 !== d && (f[h++] = g), 
            !1 !== a && (h = (f = f.concat(g.getChildren(!0, b, d))).length))), g = g._next;
            return f;
        }, s.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0), e = (d = c.getTweensOf(a)).length; -1 < --e; ) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
        }, s.recent = function() {
            return this._recent;
        }, s._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, s.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), 
            e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, s._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; -1 < --d; ) c[d]._kill(a, b) && (e = !0);
            return e;
        }, s.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; -1 < --c; ) b[c]._enabled(!1, !1);
            return !1 !== a && (this._labels = {}), this._uncache(!0);
        }, s.invalidate = function() {
            for (var b = this._first; b; ) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this);
        }, s._enabled = function(a, c) {
            if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c);
        }, s.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e;
        }, s.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), 
            this) : (this._dirty && this.totalDuration(), this._duration);
        }, s.totalDuration = function(a) {
            if (arguments.length) return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
            if (this._dirty) {
                for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f; ) b = f._prev, 
                f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, 
                e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, 
                f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, 
                e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), 
                e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), d < (c = f._startTime + f._totalDuration / f._timeScale) && (d = c), 
                f = b;
                e._duration = e._totalDuration = d, e._dirty = !1;
            }
            return this._totalDuration;
        }, s.paused = function(b) {
            if (!1 === b && this._paused) for (var c = this._first; c; ) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), 
            c = c._next;
            return a.prototype.paused.apply(this, arguments);
        }, s.usesFrames = function() {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
        }, s.rawTime = function(a) {
            return a && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }, d;
    }, !0), _gsScope._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        function d(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
        }
        var e = 1e-8, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals, j = new c(null, null, 1, 0), k = d.prototype = new a();
        return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.3", k.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._uncache(!0), a.prototype.invalidate.call(this);
        }, k.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, k.removeCallback = function(a, b) {
            if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); -1 < --d; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
        }, k.removePause = function(b) {
            return this.removeCallback(a._internals.pauseCallback, b);
        }, k.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, h = c.repeat && i.TweenMax || b;
            for (e in c) g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, 
            f = new h(this, d, g), g.onStart = function() {
                f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), 
                c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
            }, f;
        }, k.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                callbackScope: this
            }, c.immediateRender = !1 !== c.immediateRender;
            var d = this.tweenTo(b, c);
            return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, k.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
            if (q !== p._time && (a += p._time - q), r - e <= a && 0 <= a) p._locked || (p._totalTime = r, 
            p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", 
            k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (a <= 0 && -e <= a || w < 0 || w === e) && w !== a && p._first && (k = !0, 
            e < w && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, 
            p._yoyo && 1 & p._cycle ? p._time = a = 0 : a = (p._time = s) + 1e-4; else if (a < e) if (p._locked || (p._totalTime = p._cycle = 0), 
            p._time = 0, -e < a && (a = 0), (0 !== q || 0 === s && w !== e && (0 < w || a < 0 && 0 <= w) && !p._locked) && (j = "onReverseComplete", 
            f = p._reversed), a < 0) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, 
            j = "onReverseComplete") : 0 <= w && p._first && (k = !0), p._rawPrevTime = a; else {
                if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f) for (d = p._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, p._initted || (k = !0);
            } else 0 === s && w < 0 && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 
            0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && t <= a && p._cycle--, 
            p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), 
            p._time > s ? a = (p._time = s) + 1e-4 : p._time < 0 ? p._time = a = 0 : a = p._time));
            if (p._hasPause && !p._forcingPlayhead && !b) {
                if (q < (a = p._time) || p._repeat && y !== p._cycle) for (d = p._first; d && d._startTime <= a && !m; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), 
                d = d._next; else for (d = p._last; d && d._startTime >= a && !m; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (m = d), 
                d = d._prev;
                m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, 
                m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
            }
            if (p._cycle !== y && !p._locked) {
                var z = p._yoyo && 0 != (1 & y), A = z === (p._yoyo && 0 != (1 & p._cycle)), B = p._totalTime, C = p._cycle, D = p._rawPrevTime, E = p._time;
                if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, 
                p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, 
                p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, 
                p._callback("onRepeat")), q !== p._time) return;
                if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), 
                p._locked = !1, p._paused && !x) return;
                p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
            }
            if (p._time !== q && p._first || c || k || m) {
                if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && 0 < a && (p._active = !0), 
                0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), 
                q <= (n = p._time)) for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x)); ) (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), 
                p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = i; else for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x)); ) {
                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                        if (m === d) {
                            for (m = d._prev; m && m.endTime() > p._time; ) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), 
                            m = m._prev;
                            m = null, p.pause(), p._pauseTime = o;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = i;
                }
                p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || u !== p._startTime && v === p._timeScale || !(0 === p._time || r >= p.totalDuration()) || (f && (g.length && h(), 
                p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
            } else t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate"));
        }, k.getActive = function(a, b, c) {
            var d, e, f = [], g = this.getChildren(a || null == a, b || null == a, !!c), h = 0, i = g.length;
            for (d = 0; d < i; d++) (e = g[d]).isActive() && (f[h++] = e);
            return f;
        }, k.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; b < d; b++) if (c[b].time > a) return c[b].name;
            return null;
        }, k.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; -1 < --c; ) if (b[c].time < a) return b[c].name;
            return null;
        }, k.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time;
            }), b;
        }, k.invalidate = function() {
            return this._locked = !1, a.prototype.invalidate.call(this);
        }, k.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
        }, k.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
        }, k.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), 
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
            this._totalDuration);
        }, k.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return c < a && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, k.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, k.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e);
        }, d;
    }, !0), a = 180 / Math.PI, b = [], c = [], d = [], e = {}, f = _gsScope._gsDefine.globals, 
    i = function(a, b, c, d) {
        var e = {
            a: a
        }, f = {}, g = {}, h = {
            c: d
        }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, 
        g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [ e, f, g, h ];
    }, j = function(a, e, f, g, h) {
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
        for (j = 0; j < w; j++) k = (n = a[x]).a, l = n.d, m = a[x + 1].d, q = h ? (t = b[j], 
        v = ((u = c[j]) + t) * e * .25 / (!g && d[j] || .5), l - ((o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0)) + (((p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0)) - o) * (3 * t / (t + u) + .5) / 4 || 0))) : l - ((o = l - (l - k) * e * .5) + (p = l + (m - l) * e * .5)) / 2, 
        o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, 
        n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), 
        x += 4) : x++, y = p;
        (n = a[x]).b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, 
        n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    }, k = function(a, d, e, f) {
        var h, i, j, k, l, m, n = [];
        if (f) for (i = (a = [ f ].concat(a)).length; -1 < --i; ) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
        if ((h = a.length - 2) < 0) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
        for (i = 0; i < h; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), 
        e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
    }, l = function(a, f, g, i, l, m) {
        var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
        for (o in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", 
        null == f && (f = 1), a[0]) w.push(o);
        if (1 < a.length) {
            for (u = a[a.length - 1], t = !0, n = w.length; -1 < --n; ) if (o = w[n], .05 < Math.abs(x[o] - u[o])) {
                t = !1;
                break;
            }
            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
        }
        for (b.length = c.length = d.length = 0, n = w.length; -1 < --n; ) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), 
        v[o] = k(a, o, e[o], m);
        for (n = b.length; -1 < --n; ) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
        if (!i) {
            for (n = w.length; -1 < --n; ) if (e[o]) for (s = (p = v[w[n]]).length - 1, q = 0; q < s; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, 
            d[q] = (d[q] || 0) + r * r;
            for (n = d.length; -1 < --n; ) d[n] = Math.sqrt(d[n]);
        }
        for (n = w.length, q = g ? 4 : 1; -1 < --n; ) p = v[o = w[n]], j(p, f, g, i, e[o]), 
        t && (p.splice(0, q), p.splice(p.length - q, q));
        return v;
    }, m = function(a, b, c) {
        var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === (b = b || "soft") ? 3 : 2, r = "soft" === b, s = [];
        if (r && c && (a = [ c ].concat(a)), null == a || a.length < 1 + q) throw "invalid Bezier data";
        for (m in a[0]) s.push(m);
        for (j = s.length; -1 < --j; ) {
            for (p[m = s[j]] = i = [], n = 0, l = a.length, k = 0; k < l; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), 
            r && 1 < k && k < l - 1 && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
            for (l = n - q + 1, k = n = 0; k < l; k += q) d = i[k], e = i[k + 1], f = i[k + 2], 
            h = 2 == q ? 0 : i[k + 3], i[n++] = o = 3 == q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
            i.length = n;
        }
        return p;
    }, n = function(a, b, c) {
        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; -1 < --p; ) for (f = (m = a[p]).a, 
        g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; k <= c; k++) d = e - (e = ((j = o * k) * j * g + 3 * (l = 1 - j) * (j * h + l * i)) * j), 
        b[n = p * c + k - 1] = (b[n] || 0) + d * d;
    }, p = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function(a, b, c) {
            this._target = a, b instanceof Array && (b = {
                values: b
            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
            var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
            for (d in this._autoRotate = n ? n instanceof Array ? n : [ [ "x", "y", "rotation", !0 !== n && Number(n) || 0 ] ] : null, 
            k) this._props.push(d);
            for (f = this._props.length; -1 < --f; ) d = this._props[f], this._overwriteProps.push(d), 
            e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), 
            h || j[d] !== i[0][d] && (h = j);
            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), 
            this._segCount = this._beziers[d].length, this._timeRes) {
                var p = o(this._beziers, this._timeRes);
                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, 
                this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], 
                this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
            }
            if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [ n ]), 
            f = n.length; -1 < --f; ) {
                for (g = 0; g < 3; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, 
                this._overwriteProps.push(d);
            }
            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
        },
        set: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n = this._segCount, o = this._func, p = this._target, q = b !== this._startRatio;
            if (this._timeRes) {
                if (k = this._lengths, l = this._curSeg, m = b * this._length, e = this._li, m > this._l2 && e < n - 1) {
                    for (j = n - 1; e < j && (this._l2 = k[++e]) <= m; ) ;
                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
                } else if (m < this._l1 && 0 < e) {
                    for (;0 < e && (this._l1 = k[--e]) >= m; ) ;
                    0 === e && m < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], 
                    this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
                }
                if (c = e, m -= this._l1, e = this._si, m > this._s2 && e < l.length - 1) {
                    for (j = l.length - 1; e < j && (this._s2 = l[++e]) <= m; ) ;
                    this._s1 = l[e - 1], this._si = e;
                } else if (m < this._s1 && 0 < e) {
                    for (;0 < e && (this._s1 = l[--e]) >= m; ) ;
                    0 === e && m < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
                }
                h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else h = (b - (c = b < 0 ? 0 : 1 <= b ? n - 1 : n * b >> 0) * (1 / n)) * n;
            for (d = 1 - h, e = this._props.length; -1 < --e; ) f = this._props[e], i = (h * h * (g = this._beziers[f][c]).da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, 
            this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i;
            if (this._autoRotate) {
                var r, s, t, u, v, w, x, y = this._autoRotate;
                for (e = y.length; -1 < --e; ) f = y[e][2], w = y[e][3] || 0, x = !0 === y[e][4] ? 1 : a, 
                g = this._beziers[y[e][0]], r = this._beziers[y[e][1]], g && r && (g = g[c], r = r[c], 
                s = g.a + (g.b - g.a) * h, s += ((u = g.b + (g.c - g.b) * h) - s) * h, u += (g.c + (g.d - g.c) * h - u) * h, 
                t = r.a + (r.b - r.a) * h, t += ((v = r.b + (r.c - r.b) * h) - t) * h, v += (r.c + (r.d - r.c) * h - v) * h, 
                i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, p)), 
                o[f] ? p[f](i) : p[f] = i);
            }
        }
    }), q = p.prototype, p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, 
    p.quadraticToCubic = function(a, b, c) {
        return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }, p._cssRegister = function() {
        var a = f.CSSPlugin;
        if (a) {
            var b = a._internals, c = b._parseToProxy, d = b._setPluginRatio, e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
                parser: function(a, b, f, g, h, i) {
                    b instanceof Array && (b = {
                        values: b
                    }), i = new p();
                    var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                    if (n < 0) return h;
                    for (j = 0; j <= n; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                    for (k in b) q[k] = b[k];
                    return q.values = o, (h = new e(a, "bezier", 0, 0, l.pt, 2)).data = l, h.plugin = i, 
                    h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = !0 === q.autoRotate ? 0 : Number(q.autoRotate), 
                    q.autoRotate = null != l.end.left ? [ [ "left", "top", "rotation", j, !1 ] ] : null != l.end.x && [ [ "x", "y", "rotation", j, !1 ] ]), 
                    q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, 
                    l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), 
                    i._onInitTween(l.proxy, q, g._tween), h;
                }
            });
        }
    }, q._mod = function(a) {
        for (var b, c = this._overwriteProps, d = c.length; -1 < --d; ) (b = a[c[d]]) && "function" == typeof b && (this._mod[c[d]] = b);
    }, q._kill = function(a) {
        var b, c, d = this._props;
        for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], 
        c = d.length; -1 < --c; ) d[c] === b && d.splice(c, 1);
        if (d = this._autoRotate) for (c = d.length; -1 < --c; ) a[d[c][2]] && d.splice(c, 1);
        return this._super._kill.call(this, a);
    }, _gsScope._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
        }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        (j.constructor = g).version = "2.1.3", g.API = 2, g.defaultTransformPerspective = 0, 
        g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        function F(a, b) {
            return b.toUpperCase();
        }
        function Q(a, b) {
            var c = P.createElementNS ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P.createElement(a);
            return c.style ? c : P.createElement(a);
        }
        function W(a) {
            return y.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }
        function X(a) {
            _gsScope.console && console.log(a);
        }
        function $(a, b) {
            var c, d, e = (b = b || R).style;
            if (void 0 !== e[a]) return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
            d = 5; -1 < --d && void 0 === e[c[d] + a]; ) ;
            return 0 <= d ? (Y = "-" + (Z = 3 === d ? "ms" : c[d]).toLowerCase() + "-", Z + a) : null;
        }
        function aa(a) {
            return _.getComputedStyle(a);
        }
        function ea(a, b) {
            var c, d, e, f = {};
            if (b = b || aa(a)) if (c = b.length) for (;-1 < --c; ) -1 !== (e = b[c]).indexOf("-transform") && Fa !== e || (f[e.replace(D, F)] = b.getPropertyValue(e)); else for (c in b) -1 !== c.indexOf("Transform") && Ea !== c || (f[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(D, F)] = b[c]);
            return V || (f.opacity = W(a)), d = Ta(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, 
            f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ha && (f.z = d.z, 
            f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, 
            f;
        }
        function fa(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w, "") ? f : 0 : da(a, g), 
            void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            };
        }
        function ia(a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
            if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ga[b], f = e.length;
            for (c = c || aa(a); -1 < --f; ) d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, 
            d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d;
        }
        function ka(a, b) {
            return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
        }
        function la(a, b) {
            "function" == typeof a && (a = a(r, q));
            var c = "string" == typeof a && "=" === a.charAt(1);
            return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), 
            null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
        }
        function ma(a, b, c, d) {
            var e, f, g, h, i;
            return "function" == typeof a && (a = a(r, q)), (h = null == a ? b : "number" == typeof a ? a : (e = 360, 
            f = a.split("_"), g = ((i = "=" === a.charAt(1)) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M) - (i ? 0 : b), 
            f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && ((g %= e) !== g % 180 && (g = g < 0 ? g + e : g - e)), 
            -1 !== a.indexOf("_cw") && g < 0 ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && 0 < g && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), 
            b + g)) < 1e-6 && -1e-6 < h && (h = 0), h;
        }
        function oa(a, b, c) {
            return 255 * (6 * (a = a < 0 ? a + 1 : 1 < a ? a - 1 : a) < 1 ? b + (c - b) * a * 6 : a < .5 ? c : 3 * a < 2 ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
        }
        function qa(a, b) {
            var c, d, e, f = a.match(ra) || [], g = 0, h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++) d = f[c], g += (e = a.substr(g, a.indexOf(d, g) - g)).length + d.length, 
            3 === (d = pa(d, b)).length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h + a.substr(g);
        }
        var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, y = /opacity *= *([^)]*)/i, z = /opacity:([^;]*)/i, A = /alpha\(opacity *=.+?\)/i, B = /^(rgb|hsl)/, C = /([A-Z])/g, D = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, G = /(?:Left|Right|Width)/i, H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, J = /,(?=[^\)]*(?:\(|$))/gi, K = /[\s,\(]/i, L = Math.PI / 180, M = 180 / Math.PI, N = {}, O = {
            style: {}
        }, P = _gsScope.document || {
            createElement: function() {
                return O;
            }
        }, R = Q("div"), S = Q("img"), T = g._internals = {
            _specialProps: i
        }, U = (_gsScope.navigator || {}).userAgent || "", V = function() {
            var a = U.indexOf("Android"), b = Q("a");
            return m = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || 3 < parseFloat(U.substr(a + 8, 2))), 
            o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, n = -1 !== U.indexOf("Firefox"), 
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p = parseFloat(RegExp.$1)), 
            !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity));
        }(), Y = "", Z = "", _ = "undefined" != typeof window ? window : P.defaultView || {
            getComputedStyle: function() {}
        }, ba = g.getStyle = function(a, b, c, d, e) {
            var f;
            return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), 
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a);
        }, ca = T.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e && "lineHeight" !== c) return d;
            if ("auto" === e || !d) return 0;
            var h, i, j, k = G.test(c), l = a, m = R.style, n = d < 0, o = 1 === d;
            if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight); else {
                if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", 
                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e; else {
                    if (l = a.parentNode || P.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), 
                    i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                    m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(R), h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(R), 
                k && "%" === e && !1 !== g.cacheWidths && ((i = l._gsCache = l._gsCache || {}).time = j, 
                i.width = h / d * 100), 0 !== h || f || (h = ca(a, c, d, e, !0));
            } else i = aa(a).lineHeight, a.style.lineHeight = d, h = parseFloat(aa(a).lineHeight), 
            a.style.lineHeight = i;
            return o && (h /= 100), n ? -h : h;
        }, da = T.calculateOffset = function(a, b, c) {
            if ("absolute" !== ba(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = ba(a, "margin" + d, c);
            return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0);
        }, ga = {
            width: [ "Left", "Right" ],
            height: [ "Top", "Bottom" ]
        }, ha = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], ja = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
            null != a && "" !== a || (a = "0 0");
            var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
            if (3 < d.length && !b) {
                for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ja(d[c]));
                return a.join(",");
            }
            return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), 
            ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), 
            a = e + " " + f + (2 < d.length ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), 
            b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), 
            b.ox = parseFloat(e.replace(w, "")), b.oy = parseFloat(f.replace(w, "")), b.v = a), 
            b || a;
        }, na = {
            aqua: [ 0, 255, 255 ],
            lime: [ 0, 255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, 255 ],
            navy: [ 0, 0, 128 ],
            white: [ 255, 255, 255 ],
            fuchsia: [ 255, 0, 255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ 255, 255, 0 ],
            orange: [ 255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ 255, 0, 0 ],
            pink: [ 255, 192, 203 ],
            cyan: [ 0, 255, 255 ],
            transparent: [ 255, 255, 255, 0 ]
        }, pa = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a) if ("number" == typeof a) c = [ a >> 16, a >> 8 & 255, 255 & a ]; else {
                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a]; else if ("#" === a.charAt(0)) 4 === a.length && (a = "#" + (d = a.charAt(1)) + d + (e = a.charAt(2)) + e + (f = a.charAt(3)) + f), 
                c = [ (a = parseInt(a.substr(1), 16)) >> 16, a >> 8 & 255, 255 & a ]; else if ("hsl" === a.substr(0, 3)) if (c = m = a.match(s), 
                b) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, d = 2 * (i = Number(c[2]) / 100) - (e = i <= .5 ? i * (h + 1) : i + h - i * h), 
                3 < c.length && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), 
                c[2] = oa(g - 1 / 3, d, e); else c = a.match(s) || na.transparent;
                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), 3 < c.length && (c[3] = Number(c[3]));
            } else c = na.black;
            return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, i = ((j = Math.max(d, e, f)) + (k = Math.min(d, e, f))) / 2, 
            j === k ? g = h = 0 : (l = j - k, h = .5 < i ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (e < f ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, 
            g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), 
            c;
        }, ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in na) ra += "|" + j + "\\b";
        ra = new RegExp(ra + ")", "gi"), g.colorStringFilter = function(a) {
            var b, c = a[0] + " " + a[1];
            ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), 
            a[1] = qa(a[1], b)), ra.lastIndex = 0;
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        function sa(a, b, c, d) {
            if (null == a) return function(a) {
                return a;
            };
            var e, f = b ? (a.match(ra) || [ "" ])[0] : "", g = a.split(f).join("").match(u) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = 0 < k ? g[0].replace(s, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && J.test(a)) {
                    for (o = a.replace(J, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",");
                }
                if (b = (a.match(ra) || [ f ])[0], n = (m = a.split(b).join("").match(u) || []).length, 
                k > n--) for (;++n < k; ) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && J.test(a)) {
                    for (f = a.replace(J, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",");
                }
                if (m = (b = a.match("," == j ? u : v) || []).length, k > m--) for (;++m < k; ) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return (h && "none" !== a && a.substr(0, a.indexOf(b[0])) || h) + b.join(j) + i;
            } : function(a) {
                return a;
            };
        }
        function ta(a) {
            return a = a.split(","), function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; i < 4; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }
        function wa(a, b, c, d, e, f) {
            var g = new va(a, b, c, d - c, e, -1, f);
            return g.b = c, g.e = g.xs0 = d, g;
        }
        var ua = (T._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT; i; ) b = h[i.v], 
            i.r ? b = i.r(b) : b < 1e-6 && -1e-6 < b && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 
            1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                if ((c = i.t).type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c[f] = e;
                    }
                } else c[f] = c.s + c.xs0;
                i = i._next;
            }
        }, function(a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && ((d._prev = this)._next = d);
        }), va = (T._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = N;
            for (c._transform = null, N = b, d = k = c.parse(a, b, d, e), N = p, f && (c._transform = o, 
            l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (n[h = d.p] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), 
                d.c = 0), 1 === d.type)) for (g = d.l; 0 < --g; ) i = "xn" + g, n[h = d.p + "_" + i] = d.data[i], 
                m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
                d = d._next;
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            };
        }, T.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || f.push(this.n), 
            this.r = !j || "function" == typeof j ? j : Math.round, this.type = h || 0, k && (this.pr = k, 
            c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && ((this._next = g)._prev = this);
        }), xa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), 
            d += "", e && ra.test(d + c) && (d = [ c, d ], g.colorStringFilter(d), c = d[0], 
            d = d[1]);
            var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = !1 !== k;
            for (-1 === d.indexOf(",") && -1 === c.indexOf(",") || (E = -1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J, ", ").split(" "), 
            E.join(" ").replace(J, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), 
            E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (F = (D = (f || "").split(" ")).length), 
            h.plugin = j, h.setRatio = l, m = ra.lastIndex = 0; m < F; m++) if (p = D[m], u = E[m] + "", 
            (x = parseFloat(p)) || 0 === x) h.appendXtra("", x, ka(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") && Math.round, !0); else if (e && ra.test(p)) B = ")" + ((B = u.indexOf(")") + 1) ? u.substr(B) : ""), 
            C = -1 !== u.indexOf("hsl") && V, z = u, p = pa(p, C), u = pa(u, C), (y = 6 < p.length + u.length) && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", 
            h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), 
            y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), 
            ra.lastIndex = 0; else if (v = p.match(s)) {
                if (!(w = u.match(t)) || w.length !== v.length) return h;
                for (n = o = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) && Math.round, 0 === n), 
                o = z + A.length;
                h["xs" + h.l] += p.substr(o);
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
                for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                h.e = B + h["xs" + m];
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
        }, ya = 9;
        for ((j = va.prototype).l = j.pr = 0; 0 < --ya; ) j["xn" + ya] = 0, j["xs" + ya] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, 
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, 
            g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", 0 < h ? (g.data["xn" + h] = b + c, 
            g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), 
            g.xfirst.xs0 = 0)) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e)) : g["xs" + h] += b + (d || ""), g;
        };
        function za(a, b) {
            b = b || {}, this.p = b.prefix && $(a) || a, i[a] = i[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), 
            b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, 
            this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, 
            this.pr = b.priority || 0;
        }
        var Aa = T._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, f = a.split(","), g = b.defaultValue;
            for (c = c || [ g ], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, 
            new za(f[d], b);
        }, Ba = T._registerPluginProp = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                Aa(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."), 
                        f);
                    }
                });
            }
        };
        (j = za.prototype).parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (J.test(c) || J.test(b) ? (h = b.replace(J, "|").split("|"), i = c.replace(J, "|").split("|")) : m && (h = [ b ], 
            i = [ c ])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; g < j; g++) b = h[g] = h[g] || this.dflt, 
                c = i[g] = i[g] || this.dflt, m && ((k = b.indexOf(m)) !== (l = c.indexOf(m)) && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ");
            }
            return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(ba(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
        }, g.registerSpecialProp = function(a, b, c) {
            Aa(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
                },
                priority: c
            });
        }, g.useSVGTransformAttr = !0;
        function Ka(a, b, c) {
            var d, e = P.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
        }
        function Na(a, b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Sa(a, !0);
            v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (0 === (n = a.getBBox()).x && 0 === n.y && n.width + n.height === 0 && (n = {
                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }), h = [ (-1 !== (b = ja(b).split(" "))[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y ]), 
            c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Ra && (m = w[0], 
            n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], (s = m * p - n * o) && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, 
            j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, 
            l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, 
            v = c), e || !1 !== e && !1 !== g.defaultSmoothOrigin ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, 
            v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
        }
        function Ua(a) {
            var b, c, d = this.data, e = -d.rotation * L, f = e + d.skewX * L, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                if (null != d.ox && (u += (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2) - (n * h + (o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2) * i), 
                v += o - (n * j + o * k)), s ? t += ", Dx=" + ((n = q / 2) - (n * h + (o = r / 2) * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")" : t += ", sizingMethod='auto expand')", 
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I, t) : l.filter = t + " " + b, 
                0 !== a && 1 !== a || 1 != h || 0 !== i || 0 !== j || 1 != k || (s && -1 === t.indexOf("Dx=0, Dy=0") || y.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), 
                !s) {
                    var w, z, A, B = p < 8 ? 1 : -1;
                    for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((h < 0 ? -h : h) * q + (i < 0 ? -i : i) * r)) / 2 + u), 
                    d.ieOffsetY = Math.round((r - ((k < 0 ? -k : k) * r + (j < 0 ? -j : j) * q)) / 2 + v), 
                    ya = 0; ya < 4; ya++) A = (c = -1 !== (w = m[z = ha[ya]]).indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0) !== d[z] ? ya < 2 ? -d.ieOffsetX : -d.ieOffsetY : ya < 2 ? n - d.ieOffsetX : o - d.ieOffsetY, 
                    l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px";
                }
            }
        }
        var Ca, Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ea = $("transform"), Fa = Y + "transform", Ga = $("transformOrigin"), Ha = null !== $("perspective"), Ia = T.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(!1 === g.defaultForce3D || !Ha) && (g.defaultForce3D || "auto");
        }, Ja = _gsScope.SVGElement, La = P.documentElement || {}, Ma = function() {
            var a, b, c, d = p || /Android/i.test(U) && !_gsScope.chrome;
            return P.createElementNS && La.appendChild && !d && (a = Ka("svg", La), c = (b = Ka("rect", a, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, b.style[Ga] = "50% 50%", b.style[Ea] = "scaleX(0.5)", 
            d = c === b.getBoundingClientRect().width && !(n && Ha), La.removeChild(a)), d;
        }(), Oa = function(a) {
            var b, c = Q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
            if (La.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Oa;
            } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
            return e ? d.insertBefore(this, e) : d.appendChild(this), La.removeChild(c), this.style.cssText = f, 
            b;
        }, Qa = function(a) {
            return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !function(a) {
                try {
                    return a.getBBox();
                } catch (b) {
                    return Oa.call(a, !0);
                }
            }(a));
        }, Ra = [ 1, 0, 0, 1, 0, 0 ], Sa = function(a, b) {
            var c, d, e, f, g, h, i, j = a._gsTransform || new Ia(), l = a.style;
            if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = (d = a.currentStyle.filter.match(H)) && 4 === d.length ? [ d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0 ].join(",") : ""), 
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Ea && c && !a.offsetParent && a !== La && (f = l.display, 
            l.display = "block", (i = a.parentNode) && a.offsetParent || (g = 1, h = a.nextSibling, 
            La.appendChild(a)), c = !(d = ba(a, Fa, null, !0)) || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, 
            f ? l.display = f : Xa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))), 
            (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea], 
            c = 0), e = a.getAttribute("transform"), c && e && (d = "matrix(" + (e = a.transform.baseVal.consolidate().matrix).a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", 
            c = 0)), c) return Ra;
            for (e = (d || "").match(s) || [], ya = e.length; -1 < --ya; ) f = Number(e[ya]), 
            e[ya] = (g = f - (f |= 0)) ? (1e5 * g + (g < 0 ? -.5 : .5) | 0) / 1e5 + f : f;
            return b && 6 < e.length ? [ e[0], e[1], e[4], e[5], e[12], e[13] ] : e;
        }, Ta = T.getTransform = function(a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f, h, i, j, k, l, m = d && a._gsTransform || new Ia(), n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Ha && (parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin) || 0, r = parseFloat(g.defaultTransformPerspective) || 0;
            if (m.svg = !(!a.getCTM || !Qa(a)), m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), 
            Ca = g.useSVGTransformAttr || Ma), (f = Sa(a)) !== Ra) {
                if (16 === f.length) {
                    var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], L = f[11], N = Math.atan2(D, H);
                    m.zOrigin && (I = F * (K = -m.zOrigin) - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), 
                    m.rotationX = N * M, N && (s = B * (v = Math.cos(-N)) + F * (w = Math.sin(-N)), 
                    t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, 
                    L = E * -w + L * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * M, 
                    N && (t = y * (v = Math.cos(-N)) - G * (w = Math.sin(-N)), u = z * v - H * w, G = y * w + G * v, 
                    H = z * w + H * v, L = A * w + L * v, x = s = x * v - F * w, y = t, z = u), N = Math.atan2(y, x), 
                    m.rotation = N * M, N && (s = x * (v = Math.cos(N)) + y * (w = Math.sin(N)), t = B * v + C * w, 
                    u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, 
                    B = t, F = u), m.rotationX && 359.9 < Math.abs(m.rotationX) + Math.abs(m.rotation) && (m.rotationX = m.rotation = 0, 
                    m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, 
                    m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, 
                    x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * M, 
                    B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, 
                    m.perspective = L ? 1 / (L < 0 ? -L : L) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), 
                    m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
                } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                    var O = 6 <= f.length, P = O ? f[0] : 1, Q = f[1] || 0, R = f[2] || 0, S = O ? f[3] : 1;
                    m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), 
                    k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0, l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0, 
                    m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ha && (m.rotationX = m.rotationY = m.z = 0, 
                    m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), 
                    m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
                }
                for (h in 90 < Math.abs(m.skewX) && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, 
                m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, 
                m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q, m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return d && ((a._gsTransform = m).svg && (Ca && a.style[Ea] ? b.delayedCall(.001, function() {
                Xa(a.style, Ea);
            }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform");
            }))), m;
        }, Va = T.set3DTransformRatio = T.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, K = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
            if (O && (P += O, B += O), !((1 !== a && 0 !== a || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || J || M || D || C || 1 !== G) || Ca && K || !Ha) B || P || K ? (B *= L, 
            x = P * L, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, 
            g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * L), 
            d *= b = Math.sqrt(1 + b * b), g *= b, O && (b = Math.tan(O * L), c *= b = Math.sqrt(1 + b * b), 
            f *= b)), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, 
            Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, 
            I += .01 * z.yPercent * q.height), H < (q = 1e-6) && -q < H && (H = 0), I < q && -q < I && (I = 0)), 
            u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", 
            K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"; else {
                if (n && (E < (q = 1e-4) && -q < E && (E = G = 2e-5), F < q && -q < F && (F = G = 2e-5), 
                !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= L, r = c = Math.cos(B), 
                s = f = Math.sin(B), P && (B -= P * L, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * L), 
                r *= b = Math.sqrt(1 + b * b), s *= b, z.skewY && (b = Math.tan(O * L), c *= b = Math.sqrt(1 + b * b), 
                f *= b))), d = -s, g = r; else {
                    if (!(D || C || 1 !== G || M || K)) return void (A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    c = g = 1, d = f = 0;
                }
                k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", 
                w = "0", (B = D * L) && (r = Math.cos(B), l = o * (i = -(s = Math.sin(B))), e = c * s, 
                h = f * s, o *= k = r, c *= r, f *= r), (B = C * L) && (b = d * (r = Math.cos(B)) + e * (s = Math.sin(B)), 
                t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, 
                k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, 
                g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || K) && (p && (H += e * -p, 
                I += h * -p, J += k * -p + p), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, 
                I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), H < q && -q < H && (H = w), 
                I < q && -q < I && (I = w), J < q && -q < J && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", 
                u += (c < q && -q < c ? w : c) + v + (f < q && -q < f ? w : f) + v + (i < q && -q < i ? w : i), 
                u += v + (l < q && -q < l ? w : l) + v + (d < q && -q < d ? w : d) + v + (g < q && -q < g ? w : g), 
                C || D || 1 !== G ? (u += v + (j < q && -q < j ? w : j) + v + (m < q && -q < m ? w : m) + v + (e < q && -q < e ? w : e), 
                u += v + (h < q && -q < h ? w : h) + v + (k < q && -q < k ? w : k) + v + (o < q && -q < o ? w : o) + v) : u += ",0,0,0,0,1,0,", 
                u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ea] = u;
            }
        };
        (j = Ia.prototype).x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, 
        j.scaleX = j.scaleY = j.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                var j = (d._lastParsedTransform = i).scale && "function" == typeof i.scale ? i.scale : 0;
                j && (i.scale = j(r, a));
                var k, l, m, n, o, p, s, t, u, v = a._gsTransform, w = a.style, y = Da.length, z = i, A = {}, B = "transformOrigin", C = Ta(a, e, !0, z.parseTransform), D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, 
                "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Ea) (l = R.style)[Ea] = D, 
                l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = ba(a, "width"), 
                l.height = ba(a, "height")), P.body.appendChild(R), k = Ta(R, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L)), 
                C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, 
                Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, 
                s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Sa(R, !0), 
                k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), P.body.removeChild(R), 
                k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)), 
                null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent)); else if ("object" == typeof z) {
                    if (k = {
                        scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                        scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                        scaleZ: la(z.scaleZ, C.scaleZ),
                        x: la(z.x, C.x),
                        y: la(z.y, C.y),
                        z: la(z.z, C.z),
                        xPercent: la(z.xPercent, C.xPercent),
                        yPercent: la(z.yPercent, C.yPercent),
                        perspective: la(z.transformPerspective, C.perspective)
                    }, null != (o = z.directionalRotation)) if ("object" == typeof o) for (l in o) z[l] = o[l]; else z.rotation = o;
                    "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = la(z.x, C.xPercent)), 
                    "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = la(z.y, C.yPercent)), 
                    k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), 
                    Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), 
                    k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), 
                    k.skewX = ma(z.skewX, C.skewX), k.skewY = ma(z.skewY, C.skewY);
                }
                for (Ha && null != z.force3D && (C.force3D = z.force3D, n = !0), (m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective) || null == z.scale || (k.scaleZ = 1); -1 < --y; ) (1e-6 < (D = k[u = Da[y]] - C[u]) || D < -1e-6 || null != z[u] || null != N[u]) && (n = !0, 
                f = new va(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, 
                C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin), 
                f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), 
                p === C.xOffset && s === C.yOffset || (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), 
                f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ha && m && C.zOrigin) && (Ea ? (n = !0, 
                u = Ga, D || (D = (D = (ba(a, u, e, !1, "50% 50%") + "").split(" "))[0] + " " + D[1] + " " + C.zOrigin + "px"), 
                D += "", (f = new va(w, u, 0, 0, f, -1, B)).b = w[u], f.plugin = h, Ha ? (l = C.zOrigin, 
                D = D.split(" "), C.zOrigin = (2 < D.length ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", 
                (f = new va(C, "zOrigin", 0, 0, f, -1, f.n)).b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), 
                n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3), 
                j && (i.scale = j), f;
            },
            allowFunc: !0,
            prefix: !0
        }), Aa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Aa("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: sa("inset(0% 0% 0% 0%)", !1, !0)
        }), Aa("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], z = a.style;
                for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), 
                j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = $(y[j])), -1 !== (m = l = ba(a, y[j], e, !1, "0px")).indexOf(" ") && (m = (l = m.split(" "))[0], 
                l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), "" === (s = (u = "=" === n.charAt(1)) ? (p = parseInt(n.charAt(0) + "1", 10), 
                n = n.substr(2), p *= parseFloat(n), n.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(n), 
                n.substr((p + "").length))) && (s = d[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), 
                w = ca(a, "borderTop", o, t), l = "%" === s ? (m = v / q * 100 + "%", w / r * 100 + "%") : "em" === s ? (m = v / (x = ca(a, "borderLeft", 1, "em")) + "em", 
                w / x + "em") : (m = v + "px", w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), 
                g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g;
            },
            prefix: !0,
            formatter: sa("0px 0px 0px 0px", !1, !0)
        }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, f, g) {
                return xa(a.style, c, this.format(ba(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
            },
            prefix: !0,
            formatter: sa("0px 0px", !1, !0)
        }), Aa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || aa(a), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && ((m = ba(a, "backgroundImage").replace(E, "")) && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), S.setAttribute("src", m), j = 2; -1 < --j; ) (k = -1 !== (q = h[j]).indexOf("%")) != (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S.width : a.offsetHeight - S.height, 
                    h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ");
                }
                return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ja
        }), Aa("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(a) {
                return "co" === (a += "").substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a);
            }
        }), Aa("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Aa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Aa("transformStyle", {
            prefix: !0
        }), Aa("backfaceVisibility", {
            prefix: !0
        }), Aa("userSelect", {
            prefix: !0
        }), Aa("margin", {
            parser: ta("marginTop,marginRight,marginBottom,marginLeft")
        }), Aa("padding", {
            parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Aa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return b = p < 9 ? (i = a.currentStyle, j = p < 8 ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", 
                this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e, !1, this.dflt)), 
                this.format(b)), this.parseComplex(a.style, h, b, f, g);
            }
        }), Aa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Aa("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        }), Aa("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                var h = ba(a, "borderTopWidth", e, !1, "0px"), i = this.format(b).split(" "), j = i[0].replace(x, "");
                return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e, !1, "solid") + " " + ba(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || [ "#000" ])[0];
            }
        }), Aa("borderWidth", {
            parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Aa("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            }
        });
        function Wa(a) {
            var b, c = this.t, d = c.filter || ba(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 == e && (b = -1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), 
            !ba(this.data, "filter")) : (c.filter = d.replace(A, ""), !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), 
            -1 === d.indexOf("pacity") ? 0 == e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y, "opacity=" + e));
        }
        Aa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(ba(a, "opacity", e, !1, "1")), i = a.style, j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), 
                j && 1 === h && "hidden" === ba(a, "visibility", e) && 0 !== b && (h = 0), V ? f = new va(i, "opacity", h, b - h, f) : ((f = new va(i, "opacity", 100 * h, 100 * (b - h), f)).xn1 = j ? 1 : 0, 
                i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", 
                f.data = a, f.plugin = g, f.setRatio = Wa), j && ((f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")).xs0 = "inherit", 
                d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
            }
        });
        function Ya(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; ) b.v ? c[b.p] = b.v : Xa(c, b.p), 
                b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        }
        var Xa = function(a, b) {
            b && (a.removeProperty ? ("ms" !== b.substr(0, 2) && "webkit" !== b.substr(0, 6) || (b = "-" + b), 
            a.removeProperty(b.replace(C, "-$1").toLowerCase())) : a.removeAttribute(b));
        };
        Aa("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if ((g = f._classNamePT = new va(a, d, 0, 0, g, 2)).setRatio = Ya, g.pr = -11, c = !0, 
                g.b = o, k = ea(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n; ) m[n.p] = 1, n = n._next;
                    l.setRatio(1);
                }
                return (a._gsClassPT = g).e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), 
                a.setAttribute("class", g.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), 
                g.data = j.firstMPT, a.style.cssText !== p && (a.style.cssText = p), g.xfirst = f.parse(a, j.difs, g, h);
            }
        });
        function Za(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e) e = !(g.cssText = ""); else for (d = (b = this.e.split(" ").join("").split(",")).length; -1 < --d; ) c = b[d], 
                i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i[c].p), 
                Xa(g, c);
                e && (Xa(g, Ea), (f = this.t._gsTransform) && (f.svg && (this.t.removeAttribute("data-svg-origin"), 
                this.t.removeAttribute("transform")), delete this.t._gsTransform));
            }
        }
        for (Aa("clearProps", {
            parser: function(a, b, d, e, f) {
                return (f = new va(a, d, 0, 0, f, 2)).setRatio = Za, f.e = b, f.pr = -10, f.data = e._tween, 
                c = !0, f;
            }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ya = j.length; ya--; ) Ba(j[ya]);
        (j = g.prototype)._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
            if (!a.nodeType) return !1;
            this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, 
            d = b.suffixMap || g.suffixMap, e = aa(a), f = this._overwriteProps;
            var n, p, s, t, u, v, w, x, y, A = a.style;
            if (l && "" === A.zIndex && ("auto" !== (n = ba(a, "zIndex", e)) && "" !== n || this._addLazySet(A, "zIndex", 0)), 
            "string" == typeof b && (t = A.cssText, n = ea(a, e), A.cssText = t + ";" + b, n = fa(a, n, ea(a)).difs, 
            !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), 
            this._transformType) {
                for (y = 3 === this._transformType, Ea ? m && (l = !0, "" === A.zIndex && ("auto" !== (w = ba(a, "zIndex", e)) && "" !== w || this._addLazySet(A, "zIndex", 0)), 
                o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1, 
                s = p; s && s._next; ) s = s._next;
                x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ea ? Va : Ua, 
                x.data = this._transform || Ta(a, e, !0), x.tween = h, x.pr = -1, f.pop();
            }
            if (c) {
                for (;p; ) {
                    for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                    (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, 
                    p = v;
                }
                this._firstPT = t;
            }
            return !0;
        }, j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, s, t, u = a.style;
            for (g in b) {
                if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), 
                h) c = h.parse(a, n, g, this, c, f, b); else {
                    if ("--" === g.substr(0, 2)) {
                        this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g);
                        continue;
                    }
                    m = ba(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B.test(n) ? (s || (n = (3 < (n = pa(n)).length ? "rgba(" : "rgb(") + n.join(",") + ")"), 
                    c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (o = (j = parseFloat(m)) || 0 === j ? m.substr((j + "").length) : "", 
                    "" !== m && "auto" !== m || (o = "width" === g || "height" === g ? (j = ia(a, g, e), 
                    "px") : "left" === g || "top" === g ? (j = da(a, g, e), "px") : (j = "opacity" !== g ? 0 : 1, 
                    "")), "" === (p = (t = s && "=" === n.charAt(1)) ? (l = parseInt(n.charAt(0) + "1", 10), 
                    n = n.substr(2), l *= parseFloat(n), n.replace(x, "")) : (l = parseFloat(n), s ? n.replace(x, "") : "")) && (p = g in d ? d[g] : o), 
                    n = l || 0 === l ? (t ? l + j : l) + p : b[g], o === p || "" === p && "lineHeight" !== g || !l && 0 !== l || !j || (j = ca(a, g, j, o), 
                    "%" === p ? (j /= ca(a, g, 100, "%") / 100, !0 !== b.strictUnits && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p), 
                    p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)).xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, !1 !== k && ("px" === p || "zIndex" === g), 0, m, n)).xs0 = p);
                }
                f && c && !c.plugin && (c.plugin = f);
            }
            return c;
        }, j.setRatio = function(a) {
            var b, c, d, e = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (;e; ) {
                if (b = e.c * a + e.s, e.r ? b = e.r(b) : b < 1e-6 && -1e-6 < b && (b = 0), e.type) if (1 === e.type) if (2 === (d = e.l)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c;
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next;
            } else for (;e; ) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (;e; ) {
                if (2 !== e.type) if (e.r && -1 !== e.type) if (b = e.r(e.s + e.c), e.type) {
                    if (1 === e.type) {
                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                    }
                } else e.t[e.p] = b + e.xs0; else e.t[e.p] = e.e; else e.setRatio(a);
                e = e._next;
            }
        }, j._enableTransforms = function(a) {
            this._transform = this._transform || Ta(this._target, e, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3;
        };
        function $a(a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        }
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = $a, d.data = this;
        }, j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, 
            d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, 
            a._prev = c), a;
        }, j._mod = function(a) {
            for (var b = this._firstPT; b; ) "function" == typeof a[b.p] && (b.r = a[b.p]), 
            b = b._next;
        }, j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                for (d in f = {}, b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1);
            }
            for (b.className && (c = this._classNamePT) && ((e = c.xfirst) && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), 
            c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), 
            c = this._firstPT; c; ) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), 
            d = c.plugin), c = c._next;
            return a.prototype._kill.call(this, f);
        };
        var _a = function(a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; -1 < --e; ) _a(a[e], b, c); else for (e = (d = a.childNodes).length; -1 < --e; ) g = (f = d[e]).type, 
            f.style && (b.push(ea(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c);
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [ i ], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target, _a(a, k, m), i.render(c, !0, !0), _a(a, l), i.render(0, !0, !0), 
            i._enabled(!0), e = m.length; -1 < --e; ) if ((f = fa(m[e], k[e], l[e])).firstMPT) {
                for (g in f = f.difs, d) n[g] && (f[g] = d[g]);
                for (g in h = {}, f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
            }
            return j;
        }, a.activate([ g ]), g;
    }, !0), function() {
        function c(a, b) {
            for (;a; ) a.f || a.blob || (a.m = b || Math.round), a = a._next;
        }
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c, !0;
            }
        }), b = function(a) {
            var b = a < 1 ? Math.pow(10, (a + "").length - 2) : 1;
            return function(c) {
                return (Math.round(c / a) * a * b | 0) / b;
            };
        }, d = a.prototype;
        d._onInitAllProps = function() {
            var a, d, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps;
            if ("object" != typeof h || h.push) for ("string" == typeof h && (h = h.split(",")), 
            e = h.length; -1 < --e; ) i[h[e]] = Math.round; else for (f in h) i[f] = b(h[f]);
            for (f in i) for (a = g._firstPT; a; ) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), 
            d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), 
            a._next = a._prev = null, g._propLookup[f] = j)), a = d;
            return !1;
        }, d._add = function(a, b, c, d, e) {
            this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b);
        };
    }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(a, b, c, d) {
            var e, f;
            if ("function" != typeof a.setAttribute) return !1;
            for (e in b) "function" == typeof (f = b[e]) && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), 
            this._overwriteProps.push(e);
            return !0;
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(a, b, c, d) {
            "object" != typeof b && (b = {
                rotation: b
            }), this.finals = {};
            var e, f, g, h, i, j, k = !0 === b.useRadians ? 2 * Math.PI : 360;
            for (e in b) "useRadians" !== e && ("function" == typeof (h = b[e]) && (h = h(d, a)), 
            f = (j = (h + "").split("_"))[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), 
            i = (h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0) - g, 
            j.length && (-1 !== (f = j.join("_")).indexOf("short") && ((i %= k) !== i % (k / 2) && (i = i < 0 ? i + k : i - k)), 
            -1 !== f.indexOf("_cw") && i < 0 ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && 0 < i && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), 
            (1e-6 < i || i < -1e-6) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
            return !0;
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a); else for (b = this._firstPT; b; ) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], 
            b = b._next;
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [ "easing.Ease" ], function(a) {
        function k(b, c) {
            var d = j("easing." + b, function() {}, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, d;
        }
        function m(a, b, c, d, e) {
            var f = j("easing." + a, {
                easeOut: new b(),
                easeIn: new c(),
                easeInOut: new d()
            }, !0);
            return l(f, a), f;
        }
        function n(a, b, c) {
            this.t = a, this.v = b, c && (((this.next = c).prev = this).c = c.v - b, this.gap = c.t - a);
        }
        function o(b, c) {
            var d = j("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, e.config = function(a) {
                return new d(a);
            }, d;
        }
        var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope, g = f.com.greensock, h = 2 * Math.PI, i = Math.PI / 2, j = g._class, l = a.register || function() {}, p = m("Back", o("BackOut", function(a) {
            return --a * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), o("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), o("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })), q = j("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : 1 < a && (a = 1), this._p = 1 !== a ? b : 0, 
            this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === c;
        }, !0), r = q.prototype = new a();
        return r.constructor = q, r.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
        }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) {
            return new q(a, b, c);
        }, (r = (b = j("easing.SteppedEase", function(a, b) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
        }, !0)).prototype = new a()).constructor = b, r.getRatio = function(a) {
            return a < 0 ? a = 0 : 1 <= a && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
        }, r.config = b.config = function(a, c) {
            return new b(a, c);
        }, (r = (c = j("easing.ExpoScaleEase", function(a, b, c) {
            this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
        }, !0)).prototype = new a()).constructor = c, r.getRatio = function(a) {
            return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
        }, r.config = c.config = function(a, b, d) {
            return new c(a, b, d);
        }, (r = (d = j("easing.RoughEase", function(b) {
            for (var c, d, e, f, g, h, i = (b = b || {}).taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = !1 !== b.randomize, p = !0 === b.clamp, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; -1 < --m; ) c = o ? Math.random() : 1 / l * m, 
            d = q ? q.getRatio(c) : c, e = "none" === i ? r : "out" === i ? (f = 1 - c) * f * r : "in" === i ? c * c * r : (f = c < .5 ? 2 * c : 2 * (1 - c)) * f * .5 * r, 
            o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (1 < d ? d = 1 : d < 0 && (d = 0)), 
            j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function(a, b) {
                return a.x - b.x;
            }), h = new n(1, 1, null), m = l; -1 < --m; ) g = j[m], h = new n(g.x, g.y, h);
            this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
        }, !0)).prototype = new a()).constructor = d, r.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (;b.next && a >= b.t; ) b = b.next;
                b = b.prev;
            } else for (;b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b).v + (a - b.t) / b.gap * b.c;
        }, r.config = function(a) {
            return new d(a);
        }, d.ease = new d(), m("Bounce", k("BounceOut", function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), k("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), k("BounceInOut", function(a) {
            var b = a < .5;
            return a = (a = b ? 1 - 2 * a : 2 * a - 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, 
            b ? .5 * (1 - a) : .5 * a + .5;
        })), m("Circ", k("CircOut", function(a) {
            return Math.sqrt(1 - --a * a);
        }), k("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), k("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        })), m("Elastic", (e = function(b, c, d) {
            var e = j("easing." + b, function(a, b) {
                this._p1 = 1 <= a ? a : 1, this._p2 = (b || d) / (a < 1 ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), 
                this._p2 = h / this._p2;
            }, !0), f = e.prototype = new a();
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b);
            }, e;
        })("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
        }, .3), e("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2));
        }, .3), e("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
        }, .45)), m("Expo", k("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a);
        }), k("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), k("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        })), m("Sine", k("SineOut", function(a) {
            return Math.sin(a * i);
        }), k("SineIn", function(a) {
            return 1 - Math.cos(a * i);
        }), k("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1);
        })), j("easing.EaseLookup", {
            find: function(b) {
                return a.map[b];
            }
        }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), 
        p;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(a, b) {
    "use strict";
    var c = {}, d = a.document, e = a.GreenSockGlobals = a.GreenSockGlobals || a, f = e[b];
    if (f) return "undefined" != typeof module && module.exports && (module.exports = f);
    function l(a) {
        var b, c = a.split("."), d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
    }
    function o(a) {
        var b, c = [], d = a.length;
        for (b = 0; b !== d; c.push(a[b++])) ;
        return c;
    }
    function p() {}
    var g, h, i, j, k, m = l("com.greensock"), n = 1e-8, q = function() {
        var a = Object.prototype.toString, b = a.call([]);
        return function(c) {
            return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b);
        };
    }(), r = {}, s = function(d, f, g, h) {
        this.sc = r[d] ? r[d].sc : [], (r[d] = this).gsClass = null, this.func = g;
        var i = [];
        this.check = function(j) {
            for (var k, m, n, o, p = f.length, q = p; -1 < --p; ) (k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, 
            q--) : j && k.sc.push(this);
            if (0 === q && g) {
                if (n = (m = ("com.greensock." + d).split(".")).pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), 
                h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) if (d === b) for (p in module.exports = c[b] = o, 
                c) o[p] = c[p]; else c[b] && (c[b][n] = o); else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                    return o;
                });
                for (p = 0; p < this.sc.length; p++) this.sc[p].check();
            }
        }, this.check(!0);
    }, t = a._gsDefine = function(a, b, c, d) {
        return new s(a, b, c, d);
    }, u = m._class = function(a, b, c) {
        return b = b || function() {}, t(a, [], function() {
            return b;
        }, c), b;
    };
    t.globals = e;
    var v = [ 0, 0, 1, 1 ], w = u("easing.Ease", function(a, b, c, d) {
        this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v;
    }, !0), x = w.map = {}, y = w.register = function(a, b, c, d) {
        for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); -1 < --j; ) for (f = i[j], 
        e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; -1 < --g; ) h = k[g], 
        x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
    };
    for ((i = w.prototype)._calcEnd = !1, i.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 
        1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2;
    }, h = (g = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ]).length; -1 < --h; ) i = g[h] + ",Power" + h, 
    y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), 
    y(new w(null, null, 3, h), i, "easeInOut");
    x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
    var z = u("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this;
    });
    (i = z.prototype).addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var f, g, h = this._listeners[a], i = 0;
        for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; -1 < --g; ) (f = h[g]).c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
        h.splice(i, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        });
    }, i.removeEventListener = function(a, b) {
        var c, d = this._listeners[a];
        if (d) for (c = d.length; -1 < --c; ) if (d[c].c === b) return void d.splice(c, 1);
    }, i.dispatchEvent = function(a) {
        var b, c, d, e = this._listeners[a];
        if (e) for (1 < (b = e.length) && (e = e.slice(0)), c = this._eventTarget; -1 < --b; ) (d = e[b]) && (d.up ? d.c.call(d.s || c, {
            type: a,
            target: c
        }) : d.c.call(d.s || c));
    };
    var A = a.requestAnimationFrame, B = a.cancelAnimationFrame, C = Date.now || function() {
        return new Date().getTime();
    }, D = C();
    for (h = (g = [ "ms", "moz", "webkit", "o" ]).length; -1 < --h && !A; ) A = a[g[h] + "RequestAnimationFrame"], 
    B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
    u("Ticker", function(a, b) {
        var c, e, f, g, h, i = this, l = C(), m = !(!1 === b || !A) && "auto", o = 500, q = 33, s = function(a) {
            var b, d, j = C() - D;
            o < j && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || 0 < b || !0 === a) && (i.frame++, 
            h += b + (g <= b ? .004 : g - b), d = !0), !0 !== a && (f = e(s)), d && i.dispatchEvent("tick");
        };
        z.call(i), i.time = i.frame = 0, i.tick = function() {
            s(!0);
        }, i.lagSmoothing = function(a, b) {
            return arguments.length ? (o = a || 1e8, void (q = Math.min(b, o, 0))) : o < 1e8;
        }, i.sleep = function() {
            null != f && ((m && B ? B : clearTimeout)(f), e = p, f = null, i === j && (k = !1));
        }, i.wake = function(a) {
            null !== f ? i.sleep() : a ? l += -D + (D = C()) : 10 < i.frame && (D = C() - o + 5), 
            e = 0 === c ? p : m && A ? A : function(a) {
                return setTimeout(a, 1e3 * (h - i.time) + 1 | 0);
            }, i === j && (k = !0), s(2);
        }, i.fps = function(a) {
            return arguments.length ? (g = 1 / ((c = a) || 60), h = this.time + g, void i.wake()) : c;
        }, i.useRAF = function(a) {
            return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m;
        }, i.fps(a), setTimeout(function() {
            "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1);
        }, 1500);
    }), (i = m.Ticker.prototype = new m.events.EventDispatcher()).constructor = m.Ticker;
    var E = u("core.Animation", function(a, b) {
        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, 
        this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, 
        Z) {
            k || j.wake();
            var c = this.vars.useFrames ? Y : Z;
            c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
    });
    j = E.ticker = new m.Ticker(), (i = E.prototype)._dirty = i._gc = i._initted = i._paused = !1, 
    i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, 
    i._paused = !1;
    var F = function() {
        k && 2e3 < C() - D && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
        var a = setTimeout(F, 2e3);
        a.unref && a.unref();
    };
    F(), i.play = function(a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
    }, i.pause = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!0);
    }, i.resume = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!1);
    }, i.seek = function(a, b) {
        return this.totalTime(Number(a), !1 !== b);
    }, i.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0);
    }, i.reverse = function(a, b) {
        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
    }, i.render = function(a, b, c) {}, i.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, 
        !this._gc && this.timeline || this._enabled(!0), this;
    }, i.isActive = function() {
        var a, b = this._timeline, c = this._startTime;
        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n;
    }, i._enabled = function(a, b) {
        return k || j.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), 
        !1;
    }, i._kill = function(a, b) {
        return this._enabled(!1, !1);
    }, i.kill = function(a, b) {
        return this._kill(a, b), this;
    }, i._uncache = function(a) {
        for (var b = a ? this : this.timeline; b; ) b._dirty = !0, b = b.timeline;
        return this;
    }, i._swapSelfInParams = function(a) {
        for (var b = a.length, c = a.concat(); -1 < --b; ) "{self}" === a[b] && (c[b] = this);
        return c;
    }, i._callback = function(a) {
        var b = this.vars, c = b[a], d = b[a + "Params"], e = b[a + "Scope"] || b.callbackScope || this;
        switch (d ? d.length : 0) {
          case 0:
            c.call(e);
            break;

          case 1:
            c.call(e, d[0]);
            break;

          case 2:
            c.call(e, d[0], d[1]);
            break;

          default:
            c.apply(e, d);
        }
    }, i.eventCallback = function(a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, 
            e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
    }, i.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), 
        this._delay = a, this) : this._delay;
    }, i.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), 
        this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), 
        this) : (this._dirty = !1, this._duration);
    }, i.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
    }, i.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
    }, i.totalTime = function(a, b, c) {
        if (k || j.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (a < 0 && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration, e = this._timeline;
                if (d < a && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, 
                e._dirty || this._uncache(!1), e._timeline) for (;e._timeline; ) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), 
                e = e._timeline;
            }
            this._gc && this._enabled(!0, !1), this._totalTime === a && 0 !== this._duration || (K.length && _(), 
            this.render(a, b, !1), K.length && _());
        }
        return this;
    }, i.progress = i.totalProgress = function(a, b) {
        var c = this.duration();
        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
    }, i.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), 
        this) : this._startTime;
    }, i.endTime = function(a) {
        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
    }, i.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (c = (b = this._pauseTime) || 0 === b ? b : this._timeline.totalTime(), 
        this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, 
        c = this.timeline; c && c.timeline; ) c._dirty = !0, c.totalDuration(), c = c.timeline;
        return this;
    }, i.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), 
        this) : this._reversed;
    }, i.paused = function(a) {
        if (!arguments.length) return this._paused;
        var b, c, d = this._timeline;
        return a != this._paused && d && (k || a || j.wake(), c = (b = d.rawTime()) - this._pauseTime, 
        !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, 
        this._paused = a, this._active = this.isActive(), !a && 0 != c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, 
        this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), 
        this;
    };
    var G = u("core.SimpleTimeline", function(a) {
        E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    (i = G.prototype = new E()).constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, 
    i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), 
        a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), 
        e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), 
        a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), 
        this;
    }, i._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), 
        a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), 
        a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), 
        this._timeline && this._uncache(!0)), this;
    }, i.render = function(a, b, c) {
        var d, e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; ) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), 
        e = d;
    }, i.rawTime = function() {
        return k || j.wake(), this._totalTime;
    };
    function I(b) {
        return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
    }
    var H = u("TweenLite", function(b, c, d) {
        if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
        this.target = b = "string" == typeof b && H.selector(b) || b;
        var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
        if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], 
        (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0]) for (this._targets = g = o(b), 
        this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) (f = g[e]) ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), 
        this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && 1 < this._siblings[e].length && ca(f, this, null, 1, this._siblings[e])) : "string" == typeof (f = g[e--] = H.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1); else this._propLookup = {}, 
        this._siblings = aa(b, this, !1), 1 === i && 1 < this._siblings.length && ca(b, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -n, 
        this.render(Math.min(0, -this._delay)));
    }, !0);
    (i = H.prototype = new E()).constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, 
    i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.3", H.defaultEase = i._ease = new w(null, null, 1, 1), 
    H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a, b) {
        j.lagSmoothing(a, b);
    }, H.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (H.selector = c)(b) : (d = d || a.document) ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b;
    };
    function O(a) {
        for (var b, c = this._firstPT; c; ) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, 
        c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : b < 1e-6 && -1e-6 < b && !c.blob && (b = 0), 
        c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }
    function P(a) {
        return (1e3 * a | 0) / 1e3 + "";
    }
    function Q(a, b, c, d) {
        var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
        for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], 
        b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, 
        d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; h < i; h++) k = f[h], 
        n += (j = b.substr(m, b.indexOf(k, m) - m)) || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), 
        k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), 
        l.push(g), l._firstPT = {
            _next: l._firstPT,
            t: l,
            p: l.length - 1,
            s: g,
            c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
            f: 0,
            m: o && o < 4 ? Math.round : P
        }), m += k.length;
        return (n += b.substr(m)) && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), 
        l;
    }
    function R(a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var k = typeof a[b], l = "function" != k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = {
            t: a,
            p: b,
            s: m,
            f: "function" == k,
            pg: 0,
            n: e || b,
            m: f ? "function" == typeof f ? f : Math.round : 0,
            pr: 0,
            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
        };
        return "number" == typeof m && ("number" == typeof d || n) || (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, 
        o = {
            t: Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: e || b,
            pr: 0,
            m: 0
        }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), 
        this._firstPT = o) : void 0;
    }
    var K = [], L = {}, M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/, S = H._internals = {
        isArray: q,
        isSelector: I,
        lazyTweens: K,
        blobDif: Q
    }, T = H._plugins = {}, U = S.tweenLookup = {}, V = 0, W = S.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }, X = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
    }, Y = E._rootFramesTimeline = new G(), Z = E._rootTimeline = new G(), $ = 30, _ = S.lazyRender = function() {
        var a, b, c = K.length;
        for (L = {}, a = 0; a < c; a++) (b = K[a]) && !1 !== b._lazy && (b.render(b._lazy[0], b._lazy[1], !0), 
        b._lazy = !1);
        K.length = 0;
    };
    Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), 
    E._updateRoot = H.render = function() {
        var a, b, c;
        if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), 
        K.length && _(), j.frame >= $) {
            for (c in $ = j.frame + (parseInt(H.autoSleep, 10) || 120), U) {
                for (a = (b = U[c].tweens).length; -1 < --a; ) b[a]._gc && b.splice(a, 1);
                0 === b.length && delete U[c];
            }
            if ((!(c = Z._first) || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
                for (;c && c._paused; ) c = c._next;
                c || j.sleep();
            }
        }
    }, j.addEventListener("tick", E._updateRoot);
    function ba(a, b, c, d) {
        var e, f, g = a.vars.onOverwrite;
        return g && (e = g(a, b, c, d)), (g = H.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f;
    }
    var aa = function(a, b, c) {
        var d, e, f = a._gsTweenID;
        if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
            target: a,
            tweens: []
        }), b && ((d = U[f].tweens)[e = d.length] = b, c)) for (;-1 < --e; ) d[e] === b && d.splice(e, 1);
        return U[f].tweens;
    }, ca = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || 4 <= d) {
            for (i = e.length, f = 0; f < i; f++) if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break;
            return g;
        }
        var j, k = b._startTime + n, l = [], m = 0, o = 0 === b._duration;
        for (f = e.length; -1 < --f; ) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 
        0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
        for (f = m; -1 < --f; ) if (i = (h = l[f])._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 
        2 !== d || !h._firstPT && h._initted && i) {
            if (2 !== d && !ba(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
        }
        return g;
    }, da = function(a, b, c) {
        for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
            if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
            d = d._timeline;
        }
        return b < (f /= e) ? f - b : c && f === b || !a._initted && f - b < 2 * n ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n;
    };
    i._init = function() {
        var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease, l = this._startAt;
        if (g.startAt) {
            for (d in l && (l.render(-1, !0), l.kill()), e = {}, g.startAt) e[d] = g.startAt[d];
            if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, 
            e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, 
            e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), 
            j) if (0 < this._time) this._startAt = null; else if (0 !== i) return;
        } else if (g.runBackwards && 0 !== i) if (l) l.render(-1, !0), l.kill(), this._startAt = null; else {
            for (d in 0 !== this._time && (j = !1), c = {}, g) W[d] && "autoCSS" !== d || (c[d] = g[d]);
            if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, 
            this._startAt = H.to(this.target, 0, c), j) {
                if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
        }
        if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, 
        g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), 
        this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, 
        this._targets) for (f = this._targets.length, a = 0; a < f; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
        if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), 
        g.runBackwards) for (c = this._firstPT; c; ) c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = g.onUpdate, this._initted = !0;
    }, i._initProps = function(b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        for (g in L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && !1 !== this.vars.autoCSS && function(a, b) {
            var c, d = {};
            for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], 
            delete a[c]);
            a.css = d;
        }(this.vars, b), this.vars) if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this)); else if (T[g] && (j = new T[g]())._onInitTween(b, this.vars[g], this, f)) {
            for (this._firstPT = k = {
                _next: this._firstPT,
                t: j,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: g,
                pg: 1,
                pr: j._priority,
                m: 0
            }, h = j._overwriteProps.length; -1 < --h; ) c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), 
            k._next && (k._next._prev = k);
        } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
        return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : 1 < this._overwrite && this._firstPT && 1 < d.length && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), 
        this._initProps(b, c, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), 
        i);
    }, i.render = function(a, b, c) {
        var d, e, f, g, h = this, i = h._time, j = h._duration, k = h._rawPrevTime;
        if (j - n <= a && 0 <= a) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, 
        h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 
        0 !== j || !h._initted && h.vars.lazy && !c || (h._startTime === h._timeline._duration && (a = 0), 
        (k < 0 || a <= 0 && -n <= a || k === n && "isPause" !== h.data) && k !== a && (c = !0, 
        n < k && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n); else if (a < n) h._totalTime = h._time = 0, 
        h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && 0 < k) && (e = "onReverseComplete", 
        d = h._reversed), -n < a ? a = 0 : a < 0 && (h._active = !1, 0 !== j || !h._initted && h.vars.lazy && !c || (0 <= k && (k !== n || "isPause" !== h.data) && (c = !0), 
        h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0); else if (h._totalTime = h._time = a, 
        h._easeType) {
            var l = a / j, m = h._easeType, o = h._easePower;
            (1 === m || 3 === m && .5 <= l) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), 
            h.ratio = 1 === m ? 1 - l : 2 === m ? l : a / j < .5 ? l / 2 : 1 - l / 2;
        } else h.ratio = h._ease.getRatio(a / j);
        if (h._time !== i || c) {
            if (!h._initted) {
                if (h._init(), !h._initted || h._gc) return;
                if (!c && h._firstPT && (!1 !== h.vars.lazy && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, 
                h._rawPrevTime = k, K.push(h), void (h._lazy = [ a, b ]);
                h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
            }
            for (!1 !== h._lazy && (h._lazy = !1), h._active || !h._paused && h._time !== i && 0 <= a && (h._active = !0), 
            0 === i && (h._startAt && (0 <= a ? h._startAt.render(a, !0, c) : e = e || "_dummyGS"), 
            !h.vars.onStart || 0 === h._time && 0 !== j || (b || h._callback("onStart"))), f = h._firstPT; f; ) f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, 
            f = f._next;
            h._onUpdate && (a < 0 && h._startAt && -1e-4 !== a && h._startAt.render(a, !0, c), 
            b || (h._time !== i || d || c) && h._callback("onUpdate")), !e || h._gc && !c || (a < 0 && h._startAt && !h._onUpdate && -1e-4 !== a && h._startAt.render(a, !0, c), 
            d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 
            0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0));
        }
    }, i._kill = function(a, b, c) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, 
        this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline, n = this._firstPT;
        if ((q(b) || I(b)) && "number" != typeof b[0]) for (d = b.length; -1 < --d; ) this._kill(a, b[d], c) && (i = !0); else {
            if (this._targets) {
                for (d = this._targets.length; -1 < --d; ) if (b === this._targets[d]) {
                    h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], 
                    e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                    break;
                }
            } else {
                if (b !== this.target) return !1;
                h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
            }
            if (h) {
                if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), 
                c && (H.onOverwrite || this.vars.onOverwrite)) {
                    for (f in j) h[f] && (l = l || []).push(f);
                    if ((l || !a) && !ba(this, c, b, l)) return !1;
                }
                for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), 
                g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), 
                g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                !this._firstPT && this._initted && n && this._enabled(!1, !1);
            }
        }
        return i;
    }, i.invalidate = function() {
        this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
        var a = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, 
        this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], 
        E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, 
        this.render(a, !1, !1 !== this.vars.lazy)), this;
    }, i._enabled = function(a, b) {
        if (k || j.wake(), a && this._gc) {
            var c, d = this._targets;
            if (d) for (c = d.length; -1 < --c; ) this._siblings[c] = aa(d[c], this, !0); else this._siblings = aa(this.target, this, !0);
        }
        return E.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && H._onPluginEvent(a ? "_onEnable" : "_onDisable", this);
    }, H.to = function(a, b, c) {
        return new H(a, b, c);
    }, H.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c);
    }, H.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
        new H(a, b, d);
    }, H.delayedCall = function(a, b, c, d, e) {
        return new H(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0
        });
    }, H.set = function(a, b) {
        return new H(a, 0, b);
    }, H.getTweensOf = function(a, b) {
        if (null == a) return [];
        var c, d, e, f;
        if (a = "string" == typeof a && H.selector(a) || a, (q(a) || I(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; -1 < --c; ) d = d.concat(H.getTweensOf(a[c], b));
            for (c = d.length; -1 < --c; ) for (f = d[c], e = c; -1 < --e; ) f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID) for (c = (d = aa(a).concat()).length; -1 < --c; ) (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
        return d || [];
    }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) {
        "object" == typeof b && (c = b, b = !1);
        for (var d = H.getTweensOf(a, b), e = d.length; -1 < --e; ) d[e]._kill(c, a);
    };
    var ea = u("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], 
        this._priority = b || 0, this._super = ea.prototype;
    }, !0);
    if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, 
    i.setRatio = O, i._kill = function(a) {
        var b, c = this._overwriteProps, d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; -1 < --b; ) null != a[c[b]] && c.splice(b, 1);
        for (;d; ) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, 
        d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
        return !1;
    }, i._mod = i._roundProps = function(a) {
        for (var b, c = this._firstPT; c; ) (b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), 
        c = c._next;
    }, H._onPluginEvent = function(a, b) {
        var c, d, e, f, g, h = b._firstPT;
        if ("_onInitAllProps" === a) {
            for (;h; ) {
                for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
                (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, 
                h = g;
            }
            h = b._firstPT = e;
        }
        for (;h; ) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
        return c;
    }, ea.activate = function(a) {
        for (var b = a.length; -1 < --b; ) a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
        return !0;
    }, t.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
            ea.call(this, c, d), this._overwriteProps = e || [];
        }, !0 === a.global), h = g.prototype = new ea(c);
        for (b in (h.constructor = g).API = a.API, f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return g.version = a.version, ea.activate([ g ]), g;
    }, g = a._gsQueue) {
        for (h = 0; h < g.length; h++) g[h]();
        for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
    k = !1;
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), 
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        function d(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
        }
        var e = 1e-8, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals, j = new c(null, null, 1, 0), k = d.prototype = new a();
        return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.3", k.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._uncache(!0), a.prototype.invalidate.call(this);
        }, k.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, k.removeCallback = function(a, b) {
            if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); -1 < --d; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
        }, k.removePause = function(b) {
            return this.removeCallback(a._internals.pauseCallback, b);
        }, k.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, h = c.repeat && i.TweenMax || b;
            for (e in c) g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, 
            f = new h(this, d, g), g.onStart = function() {
                f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), 
                c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
            }, f;
        }, k.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                callbackScope: this
            }, c.immediateRender = !1 !== c.immediateRender;
            var d = this.tweenTo(b, c);
            return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, k.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
            if (q !== p._time && (a += p._time - q), r - e <= a && 0 <= a) p._locked || (p._totalTime = r, 
            p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", 
            k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (a <= 0 && -e <= a || w < 0 || w === e) && w !== a && p._first && (k = !0, 
            e < w && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, 
            p._yoyo && 1 & p._cycle ? p._time = a = 0 : a = (p._time = s) + 1e-4; else if (a < e) if (p._locked || (p._totalTime = p._cycle = 0), 
            p._time = 0, -e < a && (a = 0), (0 !== q || 0 === s && w !== e && (0 < w || a < 0 && 0 <= w) && !p._locked) && (j = "onReverseComplete", 
            f = p._reversed), a < 0) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, 
            j = "onReverseComplete") : 0 <= w && p._first && (k = !0), p._rawPrevTime = a; else {
                if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f) for (d = p._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, p._initted || (k = !0);
            } else 0 === s && w < 0 && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 
            0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && t <= a && p._cycle--, 
            p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), 
            p._time > s ? a = (p._time = s) + 1e-4 : p._time < 0 ? p._time = a = 0 : a = p._time));
            if (p._hasPause && !p._forcingPlayhead && !b) {
                if (q < (a = p._time) || p._repeat && y !== p._cycle) for (d = p._first; d && d._startTime <= a && !m; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), 
                d = d._next; else for (d = p._last; d && d._startTime >= a && !m; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (m = d), 
                d = d._prev;
                m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, 
                m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
            }
            if (p._cycle !== y && !p._locked) {
                var z = p._yoyo && 0 != (1 & y), A = z === (p._yoyo && 0 != (1 & p._cycle)), B = p._totalTime, C = p._cycle, D = p._rawPrevTime, E = p._time;
                if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, 
                p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, 
                p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, 
                p._callback("onRepeat")), q !== p._time) return;
                if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), 
                p._locked = !1, p._paused && !x) return;
                p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
            }
            if (p._time !== q && p._first || c || k || m) {
                if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && 0 < a && (p._active = !0), 
                0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), 
                q <= (n = p._time)) for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x)); ) (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), 
                p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = i; else for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x)); ) {
                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                        if (m === d) {
                            for (m = d._prev; m && m.endTime() > p._time; ) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), 
                            m = m._prev;
                            m = null, p.pause(), p._pauseTime = o;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = i;
                }
                p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || u !== p._startTime && v === p._timeScale || !(0 === p._time || r >= p.totalDuration()) || (f && (g.length && h(), 
                p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
            } else t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate"));
        }, k.getActive = function(a, b, c) {
            var d, e, f = [], g = this.getChildren(a || null == a, b || null == a, !!c), h = 0, i = g.length;
            for (d = 0; d < i; d++) (e = g[d]).isActive() && (f[h++] = e);
            return f;
        }, k.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; b < d; b++) if (c[b].time > a) return c[b].name;
            return null;
        }, k.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; -1 < --c; ) if (b[c].time < a) return b[c].name;
            return null;
        }, k.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time;
            }), b;
        }, k.invalidate = function() {
            return this._locked = !1, a.prototype.invalidate.call(this);
        }, k.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
        }, k.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
        }, k.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), 
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
            this._totalDuration);
        }, k.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return c < a && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, k.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, k.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e);
        }, d;
    }, !0), _gsScope._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        function m(a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c;
        }
        function n(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }
        function q(a, b, c, d) {
            var e = "immediateRender";
            return e in b || (b[e] = !(c && !1 === c[e] || d)), b;
        }
        function r(a) {
            if ("function" == typeof a) return a;
            var b = "object" == typeof a ? a : {
                each: a
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (!(t = "auto" === b.grid ? 0 : (b.grid || [ 1 / 0 ])[0])) {
                        for (r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && t < u; ) ;
                        t--;
                    }
                    for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, 
                    s = 1 / (r = 0), q = 0; q < u; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), 
                    r < p && (r = p), p < s && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (u < t ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, 
                    v.b = u < 0 ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }
        var d = function(a) {
            b.call(this, a);
            var c, d, e = this, f = e.vars;
            for (d in e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, 
            e._sortChildren = !0, e._onUpdate = f.onUpdate, f) c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
            i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
        }, e = 1e-8, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens, k = f.lazyRender, l = _gsScope._gsDefine.globals, o = g.pauseCallback = function() {}, s = d.prototype = new b();
        return d.version = "2.1.3", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, 
        s.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }, s.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, q(0, d)), e);
        }, s.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return e = q(0, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, s.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), s = r(e.stagger || f), t = e.startAt, u = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a), h(a = a || []) && (a = function(a) {
                var b, c = [], d = a.length;
                for (b = 0; b !== d; c.push(a[b++])) ;
                return c;
            }(a)), o = 0; o < a.length; o++) l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), 
            u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
        }, s.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.runBackwards = !0, this.staggerTo(a, b, q(0, c), d, e, f, g, h);
        }, s.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, this.staggerTo(a, b, q(0, d, c), e, f, g, h, i);
        }, s.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, s.set = function(a, b, d) {
            return this.add(new c(a, 0, q(0, b, null, !0)), d);
        }, d.exportRoot = function(a, b) {
            null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g, h, i = new d(a), j = i._timeline;
            for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, 
            g = j._first; g; ) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || ((f = g._startTime - g._delay) < 0 && (e = 1), 
            i.add(g, f)), g = h;
            return j.add(i, 0), e && i.totalDuration(), i;
        }, s.add = function(e, f, g, h) {
            var j, k, l, m, n, o, p = this;
            if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; l < k; l++) i(m = e[l]) && (m = new d({
                        tweens: m
                    })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), 
                    j += h;
                    return p._uncache(!0);
                }
                if ("string" == typeof e) return p.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e);
            }
            if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, 
            (!e._duration || 1e-5 < Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime) && e.render(j, !1, !1)), 
            (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for (o = (n = p).rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), 
            n = n._timeline;
            return p;
        }, s.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, 
                this;
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; -1 < --d; ) this.remove(b[d]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, s._remove = function(a, c) {
            return b.prototype._remove.call(this, a, c), this._last ? this._time > this.duration() && (this._time = this._duration, 
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, 
            this;
        }, s.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, s.insert = s.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, s.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, s.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, s.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, 
            this.add(f, a);
        }, s.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, s.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, s._parseTimeOrLabel = function(b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; -1 < --g; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
            if (f = "number" != typeof b || c ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, 
            "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f); else {
                if (-1 === (g = b.indexOf("="))) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = 1 < g ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
            }
            return Number(b) + c;
        }, s.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b);
        }, s.stop = function() {
            return this.paused(!0);
        }, s.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, s.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, s.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n, o = this, p = o._time, q = o._dirty ? o.totalDuration() : o._totalDuration, r = o._startTime, s = o._timeScale, t = o._paused;
            if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
                if (p < a) for (d = o._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), 
                d = d._next; else for (d = o._last; d && d._startTime >= a && !l; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (l = d), 
                d = d._prev;
                l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale);
            }
            if (q - e <= a && 0 <= a) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, 
            h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (a <= 0 && -e <= a || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, 
            o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 
            a = q + 1e-4; else if (a < e) if (o._totalTime = o._time = 0, -e < a && (a = 0), 
            (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (0 < o._rawPrevTime || a < 0 && 0 <= o._rawPrevTime)) && (h = "onReverseComplete", 
            f = o._reversed), a < 0) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, 
            h = "onReverseComplete") : 0 <= o._rawPrevTime && o._first && (i = !0), o._rawPrevTime = a; else {
                if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f) for (d = o._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, o._initted || (i = !0);
            } else o._totalTime = o._time = o._rawPrevTime = a;
            if (o._time !== p && o._first || c || i || l) {
                if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && 0 < a && (o._active = !0), 
                0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), 
                p <= (m = o._time)) for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t)); ) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), 
                o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g; else for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t)); ) {
                    if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                        if (l === d) {
                            for (l = d._prev; l && l.endTime() > o._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), 
                            l = l._prev;
                            l = null, o.pause(), o._pauseTime = n;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = g;
                }
                o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || r !== o._startTime && s === o._timeScale || !(0 === o._time || q >= o.totalDuration()) || (f && (j.length && k(), 
                o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
            }
        }, s._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, s.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? !1 !== b && (f[h++] = g) : (!1 !== d && (f[h++] = g), 
            !1 !== a && (h = (f = f.concat(g.getChildren(!0, b, d))).length))), g = g._next;
            return f;
        }, s.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0), e = (d = c.getTweensOf(a)).length; -1 < --e; ) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
        }, s.recent = function() {
            return this._recent;
        }, s._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, s.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), 
            e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, s._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; -1 < --d; ) c[d]._kill(a, b) && (e = !0);
            return e;
        }, s.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; -1 < --c; ) b[c]._enabled(!1, !1);
            return !1 !== a && (this._labels = {}), this._uncache(!0);
        }, s.invalidate = function() {
            for (var b = this._first; b; ) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this);
        }, s._enabled = function(a, c) {
            if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c);
        }, s.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e;
        }, s.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), 
            this) : (this._dirty && this.totalDuration(), this._duration);
        }, s.totalDuration = function(a) {
            if (arguments.length) return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
            if (this._dirty) {
                for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f; ) b = f._prev, 
                f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, 
                e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, 
                f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, 
                e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), 
                e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), d < (c = f._startTime + f._totalDuration / f._timeScale) && (d = c), 
                f = b;
                e._duration = e._totalDuration = d, e._dirty = !1;
            }
            return this._totalDuration;
        }, s.paused = function(b) {
            if (!1 === b && this._paused) for (var c = this._first; c; ) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), 
            c = c._next;
            return a.prototype.paused.apply(this, arguments);
        }, s.usesFrames = function() {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
        }, s.rawTime = function(a) {
            return a && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }, d;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function() {
    "use strict";
    function b() {
        return (_gsScope.GreenSockGlobals || _gsScope).TimelineMax;
    }
    "undefined" != typeof module && module.exports ? (require("./TweenLite.min.js"), 
    module.exports = b()) : "function" == typeof define && define.amd && define([ "TweenLite" ], b);
}(), function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t();
}(this, function() {
    "use strict";
    function _() {}
    _.version = "2.0.7", window.addEventListener("mousewheel", function() {});
    var P = "data-scrollmagic-pin-spacer";
    _.Controller = function(e) {
        function g() {
            0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval));
        }
        function m() {
            return a.vertical ? R.get.height(a.container) : R.get.width(a.container);
        }
        function y() {
            if (p && c) {
                var e = R.type.Array(c) ? c : l.slice(0);
                c = !1;
                var t = f, n = (f = s.scrollPos()) - t;
                0 != n && (u = 0 < n ? "FORWARD" : i), u === i && e.reverse(), e.forEach(function(e, t) {
                    e.update(!0);
                });
            }
        }
        function S() {
            n = R.rAF(y);
        }
        function b(e) {
            "resize" == e.type && (h = m(), u = t), !0 !== c && (c = !0, S());
        }
        var n, r, i = "REVERSE", t = "PAUSED", o = z.defaults, s = this, a = R.extend({}, o, e), l = [], c = !1, f = 0, u = t, d = !0, h = 0, p = !0, v = function() {
            return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container);
        }, w = this._setScrollPos = function(e) {
            a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e;
        }, E = function() {
            if (!d && h != m()) {
                var t;
                try {
                    t = new Event("resize", {
                        bubbles: !1,
                        cancelable: !1
                    });
                } catch (e) {
                    (t = document.createEvent("Event")).initEvent("resize", !1, !1);
                }
                a.container.dispatchEvent(t);
            }
            l.forEach(function(e, t) {
                e.refresh();
            }), g();
        };
        this._options = a;
        function x(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
            }), t;
        }
        return this.addScene = function(e) {
            if (R.type.Array(e)) e.forEach(function(e, t) {
                s.addScene(e);
            }); else if (e instanceof _.Scene) if (e.controller() !== s) e.addTo(s); else if (l.indexOf(e) < 0) for (var t in l.push(e), 
            l = x(l), e.on("shift.controller_sort", function() {
                l = x(l);
            }), a.globalSceneOptions) e[t] && e[t].call(e, a.globalSceneOptions[t]);
            return s;
        }, this.removeScene = function(e) {
            if (R.type.Array(e)) e.forEach(function(e, t) {
                s.removeScene(e);
            }); else {
                var t = l.indexOf(e);
                -1 < t && (e.off("shift.controller_sort"), l.splice(t, 1), e.remove());
            }
            return s;
        }, this.updateScene = function(e, n) {
            return R.type.Array(e) ? e.forEach(function(e, t) {
                s.updateScene(e, n);
            }) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e), 
            c = x(c), S()), s;
        }, this.update = function(e) {
            return b({
                type: "resize"
            }), e && y(), s;
        }, this.scrollTo = function(e, t) {
            if (R.type.Number(e)) w.call(a.container, e, t); else if (e instanceof _.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t); else if (R.type.Function(e)) w = e; else {
                var n = R.get.elements(e)[0];
                if (n) {
                    for (;n.parentNode.hasAttribute(P); ) n = n.parentNode;
                    var r = a.vertical ? "top" : "left", i = R.get.offset(a.container), o = R.get.offset(n);
                    d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t);
                }
            }
            return s;
        }, this.scrollPos = function(e) {
            return arguments.length ? (R.type.Function(e) && (v = e), s) : v.call(s);
        }, this.info = function(e) {
            var t = {
                size: h,
                vertical: a.vertical,
                scrollPos: f,
                scrollDirection: u,
                container: a.container,
                isDocument: d
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
        }, this.loglevel = function(e) {
            return s;
        }, this.enabled = function(e) {
            return arguments.length ? (p != e && (p = !!e, s.updateScene(l, !0)), s) : p;
        }, this.destroy = function(e) {
            window.clearTimeout(r);
            for (var t = l.length; t--; ) l[t].destroy(e);
            return a.container.removeEventListener("resize", b), a.container.removeEventListener("scroll", b), 
            R.cAF(n), null;
        }, function() {
            for (var e in a) o.hasOwnProperty(e) || delete a[e];
            if (a.container = R.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
            (d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), 
            h = m(), a.container.addEventListener("resize", b), a.container.addEventListener("scroll", b);
            var t = parseInt(a.refreshInterval, 10);
            a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval, g();
        }(), s;
    };
    var z = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    _.Controller.addOption = function(e, t) {
        z.defaults[e] = t;
    }, _.Controller.extend = function(e) {
        var t = this;
        _.Controller = function() {
            return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
        }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller;
    }, _.Scene = function(e) {
        var n, l, c = "BEFORE", f = "DURING", u = "AFTER", r = D.defaults, d = this, h = R.extend({}, r, e), p = c, g = 0, a = {
            start: 0,
            end: 0
        }, v = 0, i = !0, s = {};
        this.on = function(e, i) {
            return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split("."), n = t[0], r = t[1];
                "*" != n && (s[n] || (s[n] = []), s[n].push({
                    namespace: r || "",
                    callback: i
                }));
            }), d;
        }, this.off = function(e, o) {
            return e && (e = e.trim().split(" ")).forEach(function(e, t) {
                var n = e.split("."), r = n[0], i = n[1] || "";
                ("*" === r ? Object.keys(s) : [ r ]).forEach(function(e) {
                    for (var t = s[e] || [], n = t.length; n--; ) {
                        var r = t[n];
                        !r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1);
                    }
                    t.length || delete s[e];
                });
            }), d;
        }, this.trigger = function(e, n) {
            if (e) {
                var t = e.trim().split("."), r = t[0], i = t[1], o = s[r];
                o && o.forEach(function(e, t) {
                    i && i !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n));
                });
            }
            return d;
        }, d.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update());
        }).on("shift.internal", function(e) {
            t(), d.update();
        }), this.addTo = function(e) {
            return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), 
            o(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), 
            d.trigger("add", {
                controller: l
            }), d.update()), d;
        }, this.enabled = function(e) {
            return arguments.length ? (i != e && (i = !!e, d.update(!0)), d) : i;
        }, this.remove = function() {
            if (l) {
                l.info("container").removeEventListener("resize", S);
                var e = l;
                l = void 0, e.removeScene(d), d.trigger("remove");
            }
            return d;
        }, this.destroy = function(e) {
            return d.trigger("destroy", {
                reset: e
            }), d.remove(), d.off("*.*"), null;
        }, this.update = function(e) {
            if (l) if (e) if (l.enabled() && i) {
                var t, n = l.info("scrollPos");
                t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, d.trigger("update", {
                    startPos: a.start,
                    endPos: a.end,
                    scrollPos: n
                }), d.progress(t);
            } else m && p === f && C(!0); else l.updateScene(d, !1);
            return d;
        }, this.refresh = function() {
            return o(), y(), d;
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1, n = p, r = l ? l.info("scrollDirection") : "PAUSED", i = h.reverse || g <= e;
                if (0 === h.duration ? (t = g != e, p = 0 == (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c, 
                t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, p = f, t = !0) : 1 <= e && p !== u ? (g = 1, 
                p = u, t = !0) : p !== f || i || C(), t) {
                    var o = {
                        progress: g,
                        state: p,
                        scrollDirection: r
                    }, s = p != n, a = function(e) {
                        d.trigger(e, o);
                    };
                    s && n !== f && (a("enter"), a(n === c ? "start" : "end")), a("progress"), s && p !== f && (a(p === c ? "start" : "end"), 
                    a("leave"));
                }
                return d;
            }
            return g;
        };
        function z(t) {
            d[t] || (d[t] = function(e) {
                return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
                    what: t,
                    newval: h[t]
                }), -1 < D.shifts.indexOf(t) && d.trigger("shift", {
                    reason: t
                })), d) : h[t];
            });
        }
        var m, w, t = function() {
            a = {
                start: v + h.offset
            }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration;
        }, o = function(e) {
            if (n) {
                var t = "duration";
                x(t, n.call(d)) && !e && (d.trigger("change", {
                    what: t,
                    newval: h[t]
                }), d.trigger("shift", {
                    reason: t
                }));
            }
        }, y = function(e) {
            var t = 0, n = h.triggerElement;
            if (l && (n || 0 < v)) {
                if (n) if (n.parentNode) {
                    for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P); ) n = n.parentNode;
                    var s = R.get.offset(n);
                    r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o];
                } else d.triggerElement(void 0);
                var a = t != v;
                v = t, a && !e && d.trigger("shift", {
                    reason: "triggerElementPosition"
                });
            }
        }, S = function(e) {
            0 < h.triggerHook && d.trigger("shift", {
                reason: "containerResize"
            });
        }, b = R.extend(D.validate, {
            duration: function(t) {
                if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function() {
                        return l ? l.info("size") * e : 0;
                    };
                }
                if (R.type.Function(t)) {
                    n = t;
                    try {
                        t = parseFloat(n.call(d));
                    } catch (e) {
                        t = -1;
                    }
                }
                if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n = n && void 0, 0;
                return t;
            }
        }), E = function(e) {
            (e = arguments.length ? [ e ] : Object.keys(b)).forEach(function(t, e) {
                var n;
                if (b[t]) try {
                    n = b[t](h[t]);
                } catch (e) {
                    n = r[t];
                } finally {
                    h[t] = n;
                }
            });
        }, x = function(e, t) {
            var n = !1, r = h[e];
            return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n;
        };
        this.controller = function() {
            return l;
        }, this.state = function() {
            return p;
        }, this.scrollOffset = function() {
            return a.start;
        }, this.triggerPosition = function() {
            var e = h.offset;
            return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), 
            e;
        }, d.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (p === u && t || p === f && 0 === h.duration) && C(), t && F();
        }).on("progress.internal", function(e) {
            C();
        }).on("add.internal", function(e) {
            F();
        }).on("destroy.internal", function(e) {
            d.removePin(e.reset);
        });
        function L() {
            l && m && p === f && !l.info("isDocument") && C();
        }
        function T() {
            l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F();
        }
        function A(e) {
            l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
        }
        var C = function(e) {
            if (m && l) {
                var t = l.info(), n = w.spacer.firstChild;
                if (e || p !== f) {
                    var r = {
                        position: w.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, i = R.css(n, "position") != r.position;
                    w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) || p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom"))) && (i = !0) : r[t.vertical ? "top" : "left"] = h.duration * g, 
                    R.css(n, r), i && F();
                } else {
                    "fixed" != R.css(n, "position") && (R.css(n, {
                        position: "fixed"
                    }), F());
                    var o = R.get.offset(w.spacer, !0), s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
                    o[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
                        top: o.top,
                        left: o.left
                    });
                }
            }
        }, F = function() {
            if (m && l && w.inFlow) {
                var e = p === f, t = l.info("vertical"), n = w.spacer.firstChild, r = R.isMarginCollapseType(R.css(w.spacer, "display")), i = {};
                w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
                    width: R.get.width(w.spacer)
                }) : R.css(m, {
                    width: "100%"
                }) : (i["min-width"] = R.get.width(t ? m : n, !0, !0), i.width = e ? i["min-width"] : "auto"), 
                w.relSize.height ? e ? R.css(m, {
                    height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
                }) : R.css(m, {
                    height: "100%"
                }) : (i["min-height"] = R.get.height(t ? n : m, !0, !r), i.height = e ? i["min-height"] : "auto"), 
                w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), 
                R.css(w.spacer, i);
            }
        };
        this.setPin = function(e, t) {
            if (t = R.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, t), !(e = R.get.elements(e)[0])) return d;
            if ("fixed" === R.css(e, "position")) return d;
            if (m) {
                if (m === e) return d;
                d.removePin();
            }
            var n = (m = e).parentNode.style.display, r = [ "top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom" ];
            m.parentNode.style.display = "none";
            var i = "absolute" != R.css(m, "position"), o = R.css(m, r.concat([ "display" ])), s = R.css(m, [ "width", "height" ]);
            m.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);
            var a = m.parentNode.insertBefore(document.createElement("div"), m), l = R.extend(o, {
                position: i ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (i || R.extend(l, R.css(m, [ "width", "height" ])), R.css(a, l), a.setAttribute(P, ""), 
            R.addClass(a, t.spacerClass), w = {
                spacer: a,
                relSize: {
                    width: "%" === s.width.slice(-1),
                    height: "%" === s.height.slice(-1),
                    autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display)
                },
                pushFollowers: t.pushFollowers,
                inFlow: i
            }, !m.___origStyle) {
                m.___origStyle = {};
                var c = m.style;
                r.concat([ "width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing" ]).forEach(function(e) {
                    m.___origStyle[e] = c[e] || "";
                });
            }
            return w.relSize.width && R.css(a, {
                width: s.width
            }), w.relSize.height && R.css(a, {
                height: s.height
            }), a.appendChild(m), R.css(m, {
                position: i ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", L), window.addEventListener("resize", L), 
            window.addEventListener("resize", T), m.addEventListener("mousewheel", A), m.addEventListener("DOMMouseScroll", A), 
            C(), d;
        }, this.removePin = function(e) {
            if (m) {
                if (p === f && C(!0), e || !l) {
                    var t = w.spacer.firstChild;
                    if (t.hasAttribute(P)) {
                        var n = w.spacer.style, r = {};
                        [ "margin", "marginLeft", "marginRight", "marginTop", "marginBottom" ].forEach(function(e) {
                            r[e] = n[e] || "";
                        }), R.css(t, r);
                    }
                    w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), 
                    m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle);
                }
                window.removeEventListener("scroll", L), window.removeEventListener("resize", L), 
                window.removeEventListener("resize", T), m.removeEventListener("mousewheel", A), 
                m.removeEventListener("DOMMouseScroll", A), m = void 0;
            }
            return d;
        };
        var N, O = [];
        return d.on("destroy.internal", function(e) {
            d.removeClassToggle(e.reset);
        }), this.setClassToggle = function(e, t) {
            var n = R.get.elements(e);
            return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), 
            N = t, O = n, d.on("enter.internal_class leave.internal_class", function(e) {
                var n = "enter" === e.type ? R.addClass : R.removeClass;
                O.forEach(function(e, t) {
                    n(e, N);
                });
            })), d;
        }, this.removeClassToggle = function(e) {
            return e && O.forEach(function(e, t) {
                R.removeClass(e, N);
            }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d;
        }, function() {
            for (var e in h) r.hasOwnProperty(e) || delete h[e];
            for (var t in r) z(t);
            E();
        }(), d;
    };
    var D = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !R.type.Number(e)) throw 0;
                return e;
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = R.get.elements(e)[0];
                    if (!t || !t.parentNode) throw 0;
                    e = t;
                }
                return e;
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1)); else {
                    if (!(e in t)) throw 0;
                    e = t[e];
                }
                return e;
            },
            reverse: function(e) {
                return !!e;
            }
        },
        shifts: [ "duration", "offset", "triggerHook" ]
    };
    _.Scene.addOption = function(e, t, n, r) {
        e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e));
    }, _.Scene.extend = function(e) {
        var t = this;
        _.Scene = function() {
            return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
        }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene;
    }, _.Event = function(e, t, n, r) {
        for (var i in r = r || {}) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", 
        this.timeStamp = this.timestamp = Date.now(), this;
    };
    var R = _._util = function(s) {
        function a(e) {
            return parseFloat(e) || 0;
        }
        function l(e) {
            return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
        }
        function c(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase();
            });
        }
        var n, e = {}, r = function(e, t, n, r) {
            if ((t = t === document ? s : t) === s) r = !1; else if (!u.DomElement(t)) return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
            if (n && r) {
                var o = l(t);
                i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight);
            }
            return i;
        };
        e.extend = function(e) {
            for (e = e || {}, n = 1; n < arguments.length; n++) if (arguments[n]) for (var t in arguments[n]) arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
            return e;
        }, e.isMarginCollapseType = function(e) {
            return -1 < [ "block", "flex", "list-item", "table", "-webkit-box" ].indexOf(e);
        };
        var i = 0, t = [ "ms", "moz", "webkit", "o" ], o = s.requestAnimationFrame, f = s.cancelAnimationFrame;
        for (n = 0; !o && n < 4; ++n) o = s[t[n] + "RequestAnimationFrame"], f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
        o = o || function(e) {
            var t = new Date().getTime(), n = Math.max(0, 16 - (t - i)), r = s.setTimeout(function() {
                e(t + n);
            }, n);
            return i = t + n, r;
        }, f = f || function(e) {
            s.clearTimeout(e);
        }, e.rAF = o.bind(s), e.cAF = f.bind(s);
        var u = e.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
        };
        u.String = function(e) {
            return "string" === u(e);
        }, u.Function = function(e) {
            return "function" === u(e);
        }, u.Array = function(e) {
            return Array.isArray(e);
        }, u.Number = function(e) {
            return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
        }, u.DomElement = function(e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
        };
        var d = e.get = {};
        return d.elements = function(e) {
            var t = [];
            if (u.String(e)) try {
                e = document.querySelectorAll(e);
            } catch (e) {
                return t;
            }
            if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList) for (var n = 0, r = t.length = e.length; n < r; n++) {
                var i = e[n];
                t[n] = u.DomElement(i) ? i : d.elements(i);
            } else !u.DomElement(e) && e !== document && e !== s || (t = [ e ]);
            return t;
        }, d.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0;
        }, d.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0;
        }, d.width = function(e, t, n) {
            return r("width", e, t, n);
        }, d.height = function(e, t, n) {
            return r("height", e, t, n);
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft());
            }
            return n;
        }, e.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t);
        }, e.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
        }, e.css = function(e, t) {
            if (u.String(t)) return l(e)[c(t)];
            if (u.Array(t)) {
                var n = {}, r = l(e);
                return t.forEach(function(e, t) {
                    n[e] = r[c(e)];
                }), n;
            }
            for (var i in t) {
                var o = t[i];
                o == parseFloat(o) && (o += "px"), e.style[c(i)] = o;
            }
        }, e;
    }(window || {});
    return _;
}), function(e, n) {
    "function" == typeof define && define.amd ? define([ "ScrollMagic", "TweenMax", "TimelineMax" ], n) : "object" == typeof exports ? (require("gsap"), 
    n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite);
}(this, function(e, s, u) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e;
    }), e.Scene.extend(function() {
        var i, o = this;
        o.on("progress.plugin_gsap", function() {
            a();
        }), o.on("destroy.plugin_gsap", function(e) {
            o.removeTween(e.reset);
        });
        var a = function() {
            if (i) {
                var e = o.progress(), n = o.state();
                i.repeat && -1 === i.repeat() ? "DURING" === n && i.paused() ? i.play() : "DURING" === n || i.paused() || i.pause() : e != i.progress() && (0 === o.duration() ? 0 < e ? i.play() : i.reverse() : o.tweenChanges() && i.tweenTo ? i.tweenTo(e * i.duration()) : i.progress(e).pause());
            }
        };
        o.setTween = function(e, n, r) {
            var t;
            1 < arguments.length && (arguments.length < 3 && (r = n, n = 1), e = s.to(e, n, r));
            try {
                (t = u ? new u({
                    smoothChildTiming: !0
                }).add(e) : e).pause();
            } catch (e) {
                return o;
            }
            return i && o.removeTween(), i = t, e.repeat && -1 === e.repeat() && (i.repeat(-1), 
            i.yoyo(e.yoyo())), a(), o;
        }, o.removeTween = function(e) {
            return i && (e && i.progress(0).pause(), i.kill(), i = void 0), o;
        };
    });
}), function(e, r) {
    "function" == typeof define && define.amd ? define([ "ScrollMagic" ], r) : "object" == typeof exports ? r(require("scrollmagic")) : r(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic);
}(this, function(i) {
    "use strict";
    var o = "0.85em", n = "9999", v = i._util, h = 0;
    i.Scene.extend(function() {
        var t, i = this;
        i.addIndicators = function(e) {
            if (!t) {
                e = v.extend({}, {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                }, e), h++, t = new s(i, e), i.on("add.plugin_addIndicators", t.add), i.on("remove.plugin_addIndicators", t.remove), 
                i.on("destroy.plugin_addIndicators", i.removeIndicators), i.controller() && t.add();
            }
            return i;
        }, i.removeIndicators = function() {
            return t && (t.remove(), this.off("*.plugin_addIndicators"), t = void 0), i;
        };
    }), i.Controller.addOption("addIndicators", !1), i.Controller.extend(function() {
        var c = this, e = c.info(), l = e.container, f = e.isDocument, m = e.vertical, h = {
            groups: []
        };
        this._indicators = h;
        function r() {
            h.updateBoundsPositions();
        }
        function t() {
            h.updateTriggerGroupPositions();
        }
        return l.addEventListener("resize", t), f || (window.addEventListener("resize", t), 
        window.addEventListener("scroll", t)), l.addEventListener("resize", r), l.addEventListener("scroll", r), 
        this._indicators.updateBoundsPositions = function(e) {
            for (var r, t, i, o = e ? [ v.extend({}, e.triggerGroup, {
                members: [ e ]
            }) ] : h.groups, n = o.length, s = {}, d = m ? "left" : "top", a = m ? "width" : "height", g = m ? v.get.scrollLeft(l) + v.get.width(l) - 15 : v.get.scrollTop(l) + v.get.height(l) - 15; n--; ) for (r = (i = o[n]).members.length, 
            t = v.get[a](i.element.firstChild); r--; ) s[d] = g - t, v.css(i.members[r].bounds, s);
        }, this._indicators.updateTriggerGroupPositions = function(e) {
            for (var r, t, i, o, n = e ? [ e ] : h.groups, s = n.length, d = f ? document.body : l, a = f ? {
                top: 0,
                left: 0
            } : v.get.offset(d, !0), g = m ? v.get.width(l) - 15 : v.get.height(l) - 15, p = m ? "width" : "height", u = m ? "Y" : "X"; s--; ) t = (r = n[s]).element, 
            i = r.triggerHook * c.info("size"), o = v.get[p](t.firstChild.firstChild) < i ? "translate" + u + "(-100%)" : "", 
            v.css(t, {
                top: a.top + (m ? i : g - r.members[0].options.indent),
                left: a.left + (m ? g - r.members[0].options.indent : i)
            }), v.css(t.firstChild.firstChild, {
                "-ms-transform": o,
                "-webkit-transform": o,
                transform: o
            });
        }, this._indicators.updateTriggerGroupLabel = function(e) {
            var r = "trigger" + (1 < e.members.length ? "" : " " + e.members[0].options.name), t = e.element.firstChild.firstChild;
            t.textContent !== r && (t.textContent = r, m && h.updateBoundsPositions());
        }, this.addScene = function(e) {
            this._options.addIndicators && e instanceof i.Scene && e.controller() === c && e.addIndicators(), 
            this.$super.addScene.apply(this, arguments);
        }, this.destroy = function() {
            l.removeEventListener("resize", t), f || (window.removeEventListener("resize", t), 
            window.removeEventListener("scroll", t)), l.removeEventListener("resize", r), l.removeEventListener("scroll", r), 
            this.$super.destroy.apply(this, arguments);
        }, c;
    });
    var s = function(o, n) {
        var s, d, a = this, t = b.bounds(), i = b.start(n.colorStart), g = b.end(n.colorEnd), p = n.parent && v.get.elements(n.parent)[0];
        n.name = n.name || h, i.firstChild.textContent += " " + n.name, g.textContent += " " + n.name, 
        t.appendChild(i), t.appendChild(g), a.options = n, a.bounds = t, a.triggerGroup = void 0, 
        this.add = function() {
            d = o.controller(), s = d.info("vertical");
            var e = d.info("isDocument");
            p = p || (e ? document.body : d.info("container")), e || "static" !== v.css(p, "position") || v.css(p, {
                position: "relative"
            }), o.on("change.plugin_addIndicators", u), o.on("shift.plugin_addIndicators", r), 
            m(), l(), setTimeout(function() {
                d._indicators.updateBoundsPositions(a);
            }, 0);
        }, this.remove = function() {
            if (a.triggerGroup) {
                if (o.off("change.plugin_addIndicators", u), o.off("shift.plugin_addIndicators", r), 
                1 < a.triggerGroup.members.length) {
                    var e = a.triggerGroup;
                    e.members.splice(e.members.indexOf(a), 1), d._indicators.updateTriggerGroupLabel(e), 
                    d._indicators.updateTriggerGroupPositions(e), a.triggerGroup = void 0;
                } else f();
                c();
            }
        };
        var r = function() {
            l();
        }, u = function(e) {
            "triggerHook" === e.what && m();
        }, c = function() {
            t.parentNode.removeChild(t);
        }, l = function() {
            var e;
            t.parentNode !== p && (e = d.info("vertical"), v.css(i.firstChild, {
                "border-bottom-width": e ? 1 : 0,
                "border-right-width": e ? 0 : 1,
                bottom: e ? -1 : n.indent,
                right: e ? n.indent : -1,
                padding: e ? "0 8px" : "2px 4px"
            }), v.css(g, {
                "border-top-width": e ? 1 : 0,
                "border-left-width": e ? 0 : 1,
                top: e ? "100%" : "",
                right: e ? n.indent : "",
                bottom: e ? "" : n.indent,
                left: e ? "" : "100%",
                padding: e ? "0 8px" : "2px 4px"
            }), p.appendChild(t));
            var r = {};
            r[s ? "top" : "left"] = o.triggerPosition(), r[s ? "height" : "width"] = o.duration(), 
            v.css(t, r), v.css(g, {
                display: 0 < o.duration() ? "" : "none"
            });
        }, f = function() {
            d._indicators.groups.splice(d._indicators.groups.indexOf(a.triggerGroup), 1), a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element), 
            a.triggerGroup = void 0;
        }, m = function() {
            var e = o.triggerHook();
            if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - e) < 1e-4)) {
                for (var r, t = d._indicators.groups, i = t.length; i--; ) if (r = t[i], Math.abs(r.triggerHook - e) < 1e-4) return a.triggerGroup && (1 === a.triggerGroup.members.length ? f() : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), 
                d._indicators.updateTriggerGroupLabel(a.triggerGroup), d._indicators.updateTriggerGroupPositions(a.triggerGroup))), 
                r.members.push(a), a.triggerGroup = r, void d._indicators.updateTriggerGroupLabel(r);
                if (a.triggerGroup) {
                    if (1 === a.triggerGroup.members.length) return a.triggerGroup.triggerHook = e, 
                    void d._indicators.updateTriggerGroupPositions(a.triggerGroup);
                    a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), d._indicators.updateTriggerGroupLabel(a.triggerGroup), 
                    d._indicators.updateTriggerGroupPositions(a.triggerGroup), a.triggerGroup = void 0;
                }
                !function() {
                    var e = b.trigger(n.colorTrigger), r = {};
                    r[s ? "right" : "bottom"] = 0, r[s ? "border-top-width" : "border-left-width"] = 1, 
                    v.css(e.firstChild, r), v.css(e.firstChild.firstChild, {
                        padding: s ? "0 8px 3px 8px" : "3px 4px"
                    }), document.body.appendChild(e);
                    var t = {
                        triggerHook: o.triggerHook(),
                        element: e,
                        members: [ a ]
                    };
                    d._indicators.groups.push(t), a.triggerGroup = t, d._indicators.updateTriggerGroupLabel(t), 
                    d._indicators.updateTriggerGroupPositions(t);
                }();
            }
        };
    }, b = {
        start: function(e) {
            var r = document.createElement("div");
            r.textContent = "start", v.css(r, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            });
            var t = document.createElement("div");
            return v.css(t, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }), t.appendChild(r), t;
        },
        end: function(e) {
            var r = document.createElement("div");
            return r.textContent = "end", v.css(r, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            }), r;
        },
        bounds: function() {
            var e = document.createElement("div");
            return v.css(e, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": o
            }), e.style.zIndex = n, e;
        },
        trigger: function(e) {
            var r = document.createElement("div");
            r.textContent = "trigger", v.css(r, {
                position: "relative"
            });
            var t = document.createElement("div");
            v.css(t, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
            }), t.appendChild(r);
            var i = document.createElement("div");
            return v.css(i, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": o
            }), i.style.zIndex = n, i.appendChild(t), i;
        }
    };
}), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], function(b) {
        return a(b);
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = a(require("jquery")) : a(window.jQuery);
}(function(a) {
    "use strict";
    function b(a) {
        void 0 === a && (a = window.navigator.userAgent), a = a.toLowerCase();
        var b = /(edge)\/([\w.]+)/.exec(a) || /(opr)[\/]([\w.]+)/.exec(a) || /(chrome)[ \/]([\w.]+)/.exec(a) || /(iemobile)[\/]([\w.]+)/.exec(a) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 <= a.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], c = /(ipad)/.exec(a) || /(ipod)/.exec(a) || /(windows phone)/.exec(a) || /(iphone)/.exec(a) || /(kindle)/.exec(a) || /(silk)/.exec(a) || /(android)/.exec(a) || /(win)/.exec(a) || /(mac)/.exec(a) || /(linux)/.exec(a) || /(cros)/.exec(a) || /(playbook)/.exec(a) || /(bb)/.exec(a) || /(blackberry)/.exec(a) || [], d = {}, e = {
            browser: b[5] || b[3] || b[1] || "",
            version: b[2] || b[4] || "0",
            versionNumber: b[4] || b[2] || "0",
            platform: c[0] || ""
        };
        if (e.browser && (d[e.browser] = !0, d.version = e.version, d.versionNumber = parseInt(e.versionNumber, 10)), 
        e.platform && (d[e.platform] = !0), (d.android || d.bb || d.blackberry || d.ipad || d.iphone || d.ipod || d.kindle || d.playbook || d.silk || d["windows phone"]) && (d.mobile = !0), 
        (d.cros || d.mac || d.linux || d.win) && (d.desktop = !0), (d.chrome || d.opr || d.safari) && (d.webkit = !0), 
        d.rv || d.iemobile) {
            var f = "msie";
            d[e.browser = f] = !0;
        }
        if (d.edge) {
            delete d.edge;
            var g = "msedge";
            d[e.browser = g] = !0;
        }
        if (d.safari && d.blackberry) {
            var h = "blackberry";
            d[e.browser = h] = !0;
        }
        if (d.safari && d.playbook) {
            var i = "playbook";
            d[e.browser = i] = !0;
        }
        if (d.bb) {
            var j = "blackberry";
            d[e.browser = j] = !0;
        }
        if (d.opr) {
            var k = "opera";
            d[e.browser = k] = !0;
        }
        if (d.safari && d.android) {
            var l = "android";
            d[e.browser = l] = !0;
        }
        if (d.safari && d.kindle) {
            var m = "kindle";
            d[e.browser = m] = !0;
        }
        if (d.safari && d.silk) {
            var n = "silk";
            d[e.browser = n] = !0;
        }
        return d.name = e.browser, d.platform = e.platform, d;
    }
    return window.jQBrowser = b(window.navigator.userAgent), window.jQBrowser.uaMatch = b, 
    a && (a.browser = window.jQBrowser), window.jQBrowser;
}), function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
            n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, 
            n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, 
            n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, 
            n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, 
            n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), 
            n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", 
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
            n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), 
            n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), 
            n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), 
            n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), 
            n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), 
            n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            n.registerBreakpoints(), n.init(!0);
        };
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), 
        s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), 
        s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e);
        }), s.$slidesCache = s.$slides, s.reinit();
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed);
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), 
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), 
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? o[s.animType] = "translate(" + i + "px, 0px)" : o[s.animType] = "translate(0px," + i + "px)", 
                s.$slideTrack.css(o);
            },
            complete: function() {
                t && t.call();
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", 
        s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call();
        }, s.options.speed));
    }, e.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = i(t).not(this.$slider)), t;
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
        });
    }, e.prototype.applyTransition = function(i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, e.prototype.autoPlayIterator = function() {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, 
        i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), 
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), 
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), 
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), 
            e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), 
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), 
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), 
        e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), 
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), 1 < l.options.rows) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c));
                    }
                    d.appendChild(a);
                }
                o.appendChild(d);
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), 
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (o in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint && s === r.activeBreakpoint && !t || (r.activeBreakpoint = s, 
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), 
            !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, 
            r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), 
            r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [ r, l ]);
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, 
        e.data.message) {
          case "previous":
            s = 0 == o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;

          case "next":
            s = 0 == o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;

          case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
            break;

          default:
            return;
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (t = 0, i > (e = this.getNavigableIndexes())[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break;
            }
            t = e[o];
        }
        return i;
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), 
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), 
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), 
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), 
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), 
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), 
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), 
        i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), 
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), 
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), 
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), 
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        1 < e.options.rows && ((i = e.$slides.children().children()).removeAttr("style"), 
        e.$slider.empty().append(i));
    }, e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), 
        t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"));
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), 
        t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), 
        t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), 
        t.unslicked = !0, e || t.$slider.trigger("destroy", [ t ]);
    }, e.prototype.disableTransition = function(i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call();
        }, t.options.speed));
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, e.prototype.getDotCount = function() {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (;e < i.slideCount; ) ++o, 
        e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (;e < i.slideCount; ) ++o, 
        e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1;
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, 
        s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), 
        r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (r = i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, 
        (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, 
        n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, 
        r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (r = n.slideOffset = 0), 
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, 
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, 
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), 
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), 
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
        e += (n.$list.width() - o.outerWidth()) / 2)), e;
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i];
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (i = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, 
        o = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < i; ) s.push(t), t = o + e.options.slidesToScroll, 
        o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s;
    }, e.prototype.getSlick = function() {
        return this;
    }, e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, 
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e);
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), 
        t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), 
        t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [ t ]), 
        !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, 
        t.autoPlay());
    }, e.prototype.initADA = function() {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function(i) {
            return 0 <= i && i < e.slideCount;
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            });
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            });
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA();
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), 
        i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), 
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), 
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), 
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), 
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), 
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
    }, e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), 
        i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [ n, e, t ]);
                    });
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    n.$slider.trigger("lazyLoadError", [ n, e, t ]);
                }, r.src = t;
            });
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? s = !0 === n.options.infinite ? (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), 
        n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, 
        s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (0 < o && o--, 
        s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), 
        t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, e.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), 
        t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), 
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault();
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), 
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), 
            !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [ l, t, o ]), 
            l.progressiveLazyLoad();
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1);
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            l.$slider.trigger("lazyLoadError", [ l, t, o ]), l.progressiveLazyLoad());
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [ l ]);
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), 
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, 
        s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1);
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            for (e in s.respondTo = s.options.respondTo || "window", n) if (o = s.breakpoints.length - 1, 
            n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; 0 <= o; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), 
                o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
            }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i;
            });
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, 
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), 
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), 
        e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), 
        e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), 
        e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), 
        e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [ e ]);
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, 
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", 
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, 
        !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), 
        o.$slideTrack.css(s);
    }, e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), 
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), 
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), 
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            });
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        });
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e);
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (s = arguments[1], 
        l = arguments[2], "responsive" === (o = arguments[0]) && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), 
        "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e;
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [ s[t] ]; else {
            for (e = r.options.responsive.length - 1; 0 <= e; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), 
            e--;
            r.options.responsive.push(s[t]);
        }
        l && (r.unload(), r.reinit());
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), 
        i.$slider.trigger("setPosition", [ i ]);
    }, e.prototype.setProps = function() {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), 
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), 
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), 
        void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", 
        i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
        void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", 
        i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), 
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", 
        i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
        void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", 
        i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), 
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", 
        i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e <= i && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, 
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), 
            n.$slides.eq(i).addClass("slick-center");
        } else 0 <= i && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, 
        o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, 
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, 
            e = s.slideCount; e > s.slideCount - o; --e) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "");
            });
        }
    }, e.prototype.interrupt = function(i) {
        i || this.autoPlay(), this.interrupted = i;
    }, e.prototype.selectHandler = function(e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
        s = s || 0, t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), 
        o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, 
        !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
        !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o);
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
        !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o);
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, 
            a.animating = !0, a.$slider.trigger("beforeChange", [ a, a.currentSlide, s ]), n = a.currentSlide, 
            a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), 
            a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), 
            a.fadeSlide(s, function() {
                a.postSlide(s);
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function() {
                a.postSlide(s);
            }) : a.postSlide(s);
        }
    }, e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), 
        i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), 
        i.$slider.addClass("slick-loading");
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, 
        t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), 
        o <= 45 && 0 <= o || o <= 360 && 315 <= o ? !1 === s.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical";
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [ o, o.swipeDirection() ]), 
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
              case "left":
              case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), 
                o.currentDirection = 0;
                break;

              case "right":
              case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), 
                o.currentDirection = 1;
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [ o, t ]));
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), 
        o.touchObject = {});
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, 
        e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
        i.data.action) {
          case "start":
            e.swipeStart(i);
            break;

          case "move":
            e.swipeMove(i);
            break;

          case "end":
            e.swipeEnd(i);
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), 
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, 
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), 
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), 
        !l.options.verticalSwiping && !l.swiping && 4 < r ? !(l.scrolling = !0) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), 
        t = l.swipeDirection(), void 0 !== i.originalEvent && 4 < l.touchObject.swipeLength && (l.swiping = !0, 
        i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), 
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), 
        o = l.touchObject.swipeLength, (l.touchObject.edgeHit = !1) === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, 
        l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, 
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, 
        !1) : void l.setCSS(l.swipeLeft))));
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), 
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, 
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, 
        t.dragging = !0;
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), 
        i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), 
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [ e, i ]), e.destroy();
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), 
        void 0 !== t) return t;
        return o;
    };
}), function(a, b) {
    "function" == typeof define && define.amd ? define([ "jquery" ], b) : b("undefined" != typeof exports ? require("jquery") : a.jQuery);
}(this, function(a) {
    "use strict";
    function h(b) {
        if (c.webkit && !b) return {
            height: 0,
            width: 0
        };
        if (!c.data.outer) {
            var d = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            c.data.inner = a("<div>").css(a.extend({}, d)), c.data.outer = a("<div>").css(a.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, d)).append(c.data.inner).appendTo("body");
        }
        return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
            width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
        };
    }
    function j(a) {
        var b = a.originalEvent;
        return !(b.axis && b.axis === b.HORIZONTAL_AXIS || b.wheelDeltaX);
    }
    var c = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        firefox: /firefox/i.test(navigator.userAgent),
        macosx: /mac/i.test(navigator.platform),
        msedge: /edge\/\d+/i.test(navigator.userAgent),
        msie: /(msie|trident)/i.test(navigator.userAgent),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    c.scrolls.add = function(a) {
        this.remove(a).push(a);
    };
    function e(b) {
        c.scroll || (c.overlay = function() {
            var a = h(!0);
            return !(a.height || a.width);
        }(), c.scroll = h(), g(), a(window).resize(function() {
            var a = !1;
            if (c.scroll && (c.scroll.height || c.scroll.width)) {
                var b = h();
                b.height === c.scroll.height && b.width === c.scroll.width || (c.scroll = b, a = !0);
            }
            g(a);
        })), this.container = b, this.namespace = ".scrollbar_" + c.data.index++, this.options = a.extend({}, d, window.jQueryScrollbarOptions || {}), 
        this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, b.data(c.data.name, this), 
        c.scrolls.add(this);
    }
    var d = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !(c.scrolls.remove = function(b) {
            for (;0 <= a.inArray(b, this); ) this.splice(a.inArray(b, this), 1);
            return this;
        }),
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        isRtl: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onFallback: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    };
    e.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(c.data.name), c.scrolls.remove(this);
                var b = this.container.scrollLeft(), d = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(b).scrollTop(d), 
                this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), 
                this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), 
                this.wrapper.remove(), a(document).add("body").off(this.namespace), a.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [ this.container ]);
            }
        },
        init: function(b) {
            var d = this, e = this.container, f = this.containerWrapper || e, g = this.namespace, h = a.extend(this.options, b || {}), i = {
                x: this.scrollx,
                y: this.scrolly
            }, k = this.wrapper, l = {}, m = {
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop()
            };
            if (c.mobile && h.ignoreMobile || c.overlay && h.ignoreOverlay || c.macosx && !c.webkit) return a.isFunction(h.onFallback) && h.onFallback.apply(this, [ e ]), 
            !1;
            if (k) (l = {
                height: "auto",
                "margin-bottom": -1 * c.scroll.height + "px",
                "max-height": ""
            })[h.isRtl ? "margin-left" : "margin-right"] = -1 * c.scroll.width + "px", f.css(l); else {
                if (this.wrapper = k = a("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position", "absolute" === e.css("position") ? "absolute" : "relative").insertBefore(e).append(e), 
                h.isRtl && k.addClass("scroll--rtl"), e.is("textarea") && (this.containerWrapper = f = a("<div>").insertBefore(e).append(e), 
                k.addClass("scroll-textarea")), (l = {
                    height: "auto",
                    "margin-bottom": -1 * c.scroll.height + "px",
                    "max-height": ""
                })[h.isRtl ? "margin-left" : "margin-right"] = -1 * c.scroll.width + "px", f.addClass("scroll-content").css(l), 
                e.on("scroll" + g, function(b) {
                    var f = e.scrollLeft(), g = e.scrollTop();
                    if (h.isRtl) switch (!0) {
                      case c.firefox:
                        f = Math.abs(f);

                      case c.msedge || c.msie:
                        f = e[0].scrollWidth - e[0].clientWidth - f;
                    }
                    a.isFunction(h.onScroll) && h.onScroll.call(d, {
                        maxScroll: i.y.maxScrollOffset,
                        scroll: g,
                        size: i.y.size,
                        visible: i.y.visible
                    }, {
                        maxScroll: i.x.maxScrollOffset,
                        scroll: f,
                        size: i.x.size,
                        visible: i.x.visible
                    }), i.x.isVisible && i.x.scroll.bar.css("left", f * i.x.kx + "px"), i.y.isVisible && i.y.scroll.bar.css("top", g * i.y.kx + "px");
                }), k.on("scroll" + g, function() {
                    k.scrollTop(0).scrollLeft(0);
                }), h.disableBodyScroll) {
                    var n = function(a) {
                        j(a) ? i.y.isVisible && i.y.mousewheel(a) : i.x.isVisible && i.x.mousewheel(a);
                    };
                    k.on("MozMousePixelScroll" + g, n), k.on("mousewheel" + g, n), c.mobile && k.on("touchstart" + g, function(b) {
                        var c = b.originalEvent.touches && b.originalEvent.touches[0] || b, d_pageX = c.pageX, d_pageY = c.pageY, f_left = e.scrollLeft(), f_top = e.scrollTop();
                        a(document).on("touchmove" + g, function(a) {
                            var b = a.originalEvent.targetTouches && a.originalEvent.targetTouches[0] || a;
                            e.scrollLeft(f_left + d_pageX - b.pageX), e.scrollTop(f_top + d_pageY - b.pageY), 
                            a.preventDefault();
                        }), a(document).on("touchend" + g, function() {
                            a(document).off(g);
                        });
                    });
                }
                a.isFunction(h.onInit) && h.onInit.apply(this, [ e ]);
            }
            a.each(i, function(b, f) {
                function o() {
                    var a = e[m]();
                    e[m](a + n), 1 == l && p <= a + n && (a = e[m]()), -1 == l && a + n <= p && (a = e[m]()), 
                    e[m]() == a && k && k();
                }
                var k = null, l = 1, m = "x" === b ? "scrollLeft" : "scrollTop", n = h.scrollStep, p = 0;
                f.scroll || (f.scroll = d._getScroll(h["scroll" + b]).addClass("scroll-" + b), h.showArrows && f.scroll.addClass("scroll-element_arrows_visible"), 
                f.mousewheel = function(a) {
                    if (!f.isVisible || "x" === b && j(a)) return !0;
                    if ("y" === b && !j(a)) return i.x.mousewheel(a), !0;
                    var c = -1 * a.originalEvent.wheelDelta || a.originalEvent.detail, g = f.size - f.visible - f.offset;
                    return c || ("x" === b && a.originalEvent.deltaX ? c = 40 * a.originalEvent.deltaX : "y" === b && a.originalEvent.deltaY && (c = 40 * a.originalEvent.deltaY)), 
                    (0 < c && p < g || c < 0 && 0 < p) && ((p += c) < 0 && (p = 0), g < p && (p = g), 
                    d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = p, setTimeout(function() {
                        d.scrollTo && (e.stop().animate(d.scrollTo, 240, "linear", function() {
                            p = e[m]();
                        }), d.scrollTo = null);
                    }, 1)), a.preventDefault(), !1;
                }, f.scroll.on("MozMousePixelScroll" + g, f.mousewheel).on("mousewheel" + g, f.mousewheel).on("mouseenter" + g, function() {
                    p = e[m]();
                }), f.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + g, function(g) {
                    if (1 != g.which) return !0;
                    l = 1;
                    var i = {
                        eventOffset: g["x" === b ? "pageX" : "pageY"],
                        maxScrollValue: f.size - f.visible - f.offset,
                        scrollbarOffset: f.scroll.bar.offset()["x" === b ? "left" : "top"],
                        scrollbarSize: f.scroll.bar["x" === b ? "outerWidth" : "outerHeight"]()
                    }, j = 0, q = 0;
                    if (a(this).hasClass("scroll-arrow")) {
                        if (l = a(this).hasClass("scroll-arrow_more") ? 1 : -1, n = h.scrollStep * l, p = 0 < l ? i.maxScrollValue : 0, 
                        h.isRtl) switch (!0) {
                          case c.firefox:
                            p = 0 < l ? 0 : -1 * i.maxScrollValue;
                            break;

                          case c.msie || c.msedge:
                        }
                    } else l = i.scrollbarOffset + i.scrollbarSize < i.eventOffset ? 1 : i.eventOffset < i.scrollbarOffset ? -1 : 0, 
                    "x" === b && h.isRtl && (c.msie || c.msedge) && (l *= -1), n = Math.round(.75 * f.visible) * l, 
                    p = i.eventOffset - i.scrollbarOffset - (h.stepScrolling ? 1 == l ? i.scrollbarSize : 0 : Math.round(i.scrollbarSize / 2)), 
                    p = e[m]() + p / f.kx;
                    return d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = h.stepScrolling ? e[m]() + n : p, 
                    h.stepScrolling && (k = function() {
                        p = e[m](), clearInterval(q), clearTimeout(j), q = j = 0;
                    }, j = setTimeout(function() {
                        q = setInterval(o, 40);
                    }, h.duration + 100)), setTimeout(function() {
                        d.scrollTo && (e.animate(d.scrollTo, h.duration), d.scrollTo = null);
                    }, 1), d._handleMouseDown(k, g);
                }), f.scroll.bar.on("mousedown" + g, function(i) {
                    if (1 != i.which) return !0;
                    var j = i["x" === b ? "pageX" : "pageY"], k = e[m]();
                    return f.scroll.addClass("scroll-draggable"), a(document).on("mousemove" + g, function(a) {
                        var d = parseInt((a["x" === b ? "pageX" : "pageY"] - j) / f.kx, 10);
                        "x" === b && h.isRtl && (c.msie || c.msedge) && (d *= -1), e[m](k + d);
                    }), d._handleMouseDown(function() {
                        f.scroll.removeClass("scroll-draggable"), p = e[m]();
                    }, i);
                }));
            }), a.each(i, function(a, b) {
                var c = "scroll-scroll" + a + "_visible", d = "x" == a ? i.y : i.x;
                b.scroll.removeClass(c), d.scroll.removeClass(c), f.removeClass(c);
            }), a.each(i, function(b, c) {
                a.extend(c, "x" == b ? {
                    offset: parseInt(e.css("left"), 10) || 0,
                    size: e.prop("scrollWidth"),
                    visible: k.width()
                } : {
                    offset: parseInt(e.css("top"), 10) || 0,
                    size: e.prop("scrollHeight"),
                    visible: k.height()
                });
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), 
            a.isFunction(h.onUpdate) && h.onUpdate.apply(this, [ e ]), a.each(i, function(a, b) {
                var c = "x" === a ? "left" : "top", d = "x" === a ? "outerWidth" : "outerHeight", f = "x" === a ? "width" : "height", g = parseInt(e.css(c), 10) || 0, i = b.size, j = b.visible + g, k = b.scroll.size[d]() + (parseInt(b.scroll.size.css(c), 10) || 0);
                h.autoScrollSize && (b.scrollbarSize = parseInt(k * j / i, 10), b.scroll.bar.css(f, b.scrollbarSize + "px")), 
                b.scrollbarSize = b.scroll.bar[d](), b.kx = (k - b.scrollbarSize) / (i - j) || 1, 
                b.maxScrollOffset = i - j;
            }), e.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll");
        },
        _getScroll: function(b) {
            var c = {
                advanced: [ '<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>" ].join(""),
                simple: [ '<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>" ].join("")
            };
            return c[b] && (b = c[b]), b = "string" == typeof (b = b || c.simple) ? a(b).appendTo(this.wrapper) : a(b), 
            a.extend(b, {
                bar: b.find(".scroll-bar"),
                size: b.find(".scroll-element_size"),
                track: b.find(".scroll-element_track")
            }), b;
        },
        _handleMouseDown: function(b, c) {
            var d = this.namespace;
            return a(document).on("blur" + d, function() {
                a(document).add("body").off(d), b && b();
            }), a(document).on("dragstart" + d, function(a) {
                return a.preventDefault(), !1;
            }), a(document).on("mouseup" + d, function() {
                a(document).add("body").off(d), b && b();
            }), a("body").on("selectstart" + d, function(a) {
                return a.preventDefault(), !1;
            }), c && c.preventDefault(), !1;
        },
        _updateScroll: function(b, d) {
            var e = this.container, f = this.containerWrapper || e, g = "scroll-scroll" + b + "_visible", h = "x" === b ? this.scrolly : this.scrollx, i = parseInt(this.container.css("x" === b ? "left" : "top"), 10) || 0, j = this.wrapper, k = d.size, l = d.visible + i;
            d.isVisible = 1 < k - l, d.isVisible ? (d.scroll.addClass(g), h.scroll.addClass(g), 
            f.addClass(g)) : (d.scroll.removeClass(g), h.scroll.removeClass(g), f.removeClass(g)), 
            "y" === b && (e.is("textarea") || k < l ? f.css({
                height: l + c.scroll.height + "px",
                "max-height": "none"
            }) : f.css({
                "max-height": l + c.scroll.height + "px"
            })), d.size == e.prop("scrollWidth") && h.size == e.prop("scrollHeight") && d.visible == j.width() && h.visible == j.height() && d.offset == (parseInt(e.css("left"), 10) || 0) && h.offset == (parseInt(e.css("top"), 10) || 0) || (a.extend(this.scrollx, {
                offset: parseInt(e.css("left"), 10) || 0,
                size: e.prop("scrollWidth"),
                visible: j.width()
            }), a.extend(this.scrolly, {
                offset: parseInt(e.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: j.height()
            }), this._updateScroll("x" === b ? "y" : "x", h));
        }
    };
    var f = e;
    a.fn.scrollbar = function(b, d) {
        return "string" != typeof b && (d = b, b = "init"), void 0 === d && (d = []), a.isArray(d) || (d = [ d ]), 
        this.not("body, .scroll-wrapper").each(function() {
            var e = a(this), g = e.data(c.data.name);
            !g && "init" !== b || (g = g || new f(e))[b] && g[b].apply(g, d);
        }), this;
    }, a.fn.scrollbar.options = d;
    var g = function() {
        var a = 0;
        return function(e) {
            var f, h, i, j, k, l, m;
            for (f = 0; f < c.scrolls.length; f++) h = (j = c.scrolls[f]).container, i = j.options, 
            k = j.wrapper, l = j.scrollx, m = j.scrolly, (e || i.autoUpdate && k && k.is(":visible") && (h.prop("scrollWidth") != l.size || h.prop("scrollHeight") != m.size || k.width() != l.visible || k.height() != m.visible)) && (j.init(), 
            i.debug && (window.console && console.log({
                scrollHeight: h.prop("scrollHeight") + ":" + j.scrolly.size,
                scrollWidth: h.prop("scrollWidth") + ":" + j.scrollx.size,
                visibleHeight: k.height() + ":" + j.scrolly.visible,
                visibleWidth: k.width() + ":" + j.scrollx.visible
            }, !0), 0));
            clearTimeout(a), a = setTimeout(g, 300);
        };
    }();
    window.angular && function(a) {
        a.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var b = d;
            return {
                setOptions: function(c) {
                    a.extend(b, c);
                },
                $get: function() {
                    return {
                        options: a.copy(b)
                    };
                }
            };
        }).directive("jqueryScrollbar", [ "jQueryScrollbar", "$parse", function(a, b) {
            return {
                restrict: "AC",
                link: function(c, d, e) {
                    var g = b(e.jqueryScrollbar)(c);
                    d.scrollbar(g || a.options).on("$destroy", function() {
                        d.scrollbar("destroy");
                    });
                }
            };
        } ]);
    }(window.angular);
});