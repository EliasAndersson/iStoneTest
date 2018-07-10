$(document).ready(function() {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $('.product-information').prependTo('.product-wrapper');
        }
        else {
            $('.product-information').prependTo('.product-information-wrapper');
        }
    }

    checkWidth();
    $(window).resize(checkWidth);
});

