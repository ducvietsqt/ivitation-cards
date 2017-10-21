$(window).ready(function () {
    $('#magazine').turn({
        display: 'double',
        acceleration: false,
        gradients: !$.isTouch,
        elevation: 50,
        page: 2,
        autoCenter: true,
        width: $(window).width(),
        height: $(window).height(),
        // height: 1080,
        turnCorners: 'bl,tr',
        duration: 1000,
        when: {
            turned: function (e, page) {
            }
        }
    });
    $('#heart').bind('click', function (e) {
        $('#magazine').turn('next');
    });
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

