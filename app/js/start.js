$(window).ready(function () {
    $('#magazine').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        page: 1,
        autoCenter: true,
        width: $(window).width(),
        height: $(window).height(),
        turnCorners: 'bl,tr',
        when: {
            turned: function (e, page) {
                /*console.log('Current view: ', $(this).turn('view'));*/
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

