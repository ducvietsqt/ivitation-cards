let PAGE = 1;
let DISPLAY = {SINGLE:'single', DOUBLE: 'double'}; // todo: ex: 'single','double';
let DURATION = 1000;
$(window).ready(function () {
    let _MOBILE = isMobile.any();
    let _display = _MOBILE ? DISPLAY.SINGLE : DISPLAY.DOUBLE;
    let _TURNER = $('#magazine');
    _TURNER.turn({
        display: _display,
        acceleration: true,
        gradients: true,
        elevation: 50,
        page: PAGE,
        autoCenter: true,
        width: $(window).width(),
        height: $(window).height(),
        // turnCorners: 'bl,tr',

        duration: DURATION,
        when: {
            turned: function (e, page) {
            }
        }
    });
    $('#heart').bind('click', function (e) {
        _TURNER.turn('next');
    });
    _TURNER.turn("peel", "r");
    window.addEventListener("orientationchange", function() {
        _TURNER.turn("size", $(window).width(), $(window).height());
    }, false);

});


$(window).bind('keydown', function (e) {
    if (e.keyCode == 37)
        $('#magazine').turn('previous');
    else if (e.keyCode == 39)
        $('#magazine').turn('next');

});

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

