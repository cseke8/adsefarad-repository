(function(e) {
    "use strict";
    e(document).ready(function() {
        if (typeof e.fn.simplePlaceholder != "undefined") {
            e("input[placeholder], textarea[placeholder]").simplePlaceholder()
        }
        if (typeof e.fn.fitVids != "undefined") {
            e(".fitvids").fitVids()
        }
        if (typeof e.fn.superfish != "undefined") {
            e("#menu").superfish({
                delay: 100,
                animation: {
                    opacity: "show",
                    height: "show"
                },
                speed: 100,
                cssArrows: false
            })
        }
        if (typeof e.fn.revolution != "undefined") {
            e(".fullwidthbanner").revolution({
                delay: 9e3,
                startheight: 600,
                startwidth: 940,
                hideThumbs: 10,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "both",
                navigationArrows: "verticalcentered",
                navigationStyle: "round",
                touchenabled: "on",
                onHoverStop: "on",
                navOffsetHorizontal: 0,
                navOffsetVertical: 20,
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                fullWidth: "on"
            })
        }
        if (typeof e.fn.bxSlider != "undefined") {
            e("#testimonial-slider .slides").bxSlider({
                mode: "horizontal",
                speed: 500,
                slideMargin: 0,
                infiniteLoop: true,
                hideControlOnEnd: false,
                adaptiveHeight: false,
                adaptiveHeightSpeed: 500,
                video: false,
                pager: true,
                pagerType: "full",
                controls: false,
                auto: true,
                pause: 4e3,
                autoHover: true,
                useCSS: false
            });
            e("#services-slider .slides").bxSlider({
                mode: "fade",
                speed: 500,
                slideMargin: 0,
                infiniteLoop: true,
                hideControlOnEnd: false,
                adaptiveHeight: false,
                adaptiveHeightSpeed: 500,
                video: false,
                pager: true,
                pagerType: "full",
                controls: false,
                auto: true,
                pause: 4e3,
                autoHover: true,
                useCSS: false
            })
        }
        if (typeof e.fn.magnificPopup != "undefined") {
            e(".magnificPopup").magnificPopup({
                disableOn: 400,
                closeOnContentClick: true,
                type: "image"
            });
            e(".magnificPopup-gallery").magnificPopup({
                disableOn: 400,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            e(".magnificPopup-video").magnificPopup({
                type: "iframe"
            })
        }
        if (typeof e.fn.easytabs != "undefined") {
            e('div[id^="tab-"]').easytabs({
                animationSpeed: 300,
                updateHash: false
            })
        }
        if (typeof e.fn.gMap != "undefined") {
            e("#google-map").gMap({
                maptype: "ROADMAP",
                scrollwheel: true,
                zoom: 15,
                markers: [{
                    address: "Guadalupe, San Jose, Costa Rica",
                    html: "",
                    popup: false
                }]
            })
        }
    });
    e(window).scroll(function() {})
})(window.jQuery)
