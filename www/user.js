$(function () {
    console.info('User JavaScript File.');

    var $panel = $('#panel');
    var panelWidth = $('#panel-1').width();
    $panel.css({left: -panelWidth});
    $panel.show();
    $panel.width(panelWidth);
    $panel.height(window.innerHeight);

    $(document).on('click', '.Brick', function (e) {
        return false;
    });

    $('#base-1').on('click', function (e) {
        var left = +$panel.css('left').replace('px', '');
        if (left < 0) {
            $panel.animate({left: 0}, 500, function () {
                $panel.css({'box-shadow': '4px 0px 5px 0px rgba(0, 0, 0, 0.12)'});
            });
        }else {
            $panel.css({'box-shadow': 'none'});
            $panel.animate({left: -panelWidth}, 500);
        }
    });
});
