$(function () {
    console.info('User JavaScript File.');

    $(document).on('click', '.Brick', function (e) {
        console.info(e);
        return false;
    });
});
