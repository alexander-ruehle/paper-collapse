$(function () {
    $('.collapse-card').click(function () {
        $(this).toggleClass('active');
        $(this).find('.body').slideToggle();
    });
});