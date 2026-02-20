$(document).ready(function () {
    $('.navbar-toggle-button').click(function () {
        $('.navbar').slideToggle("slow");
        $(this).toggleClass('active');
        if ($(this).attr('aria-expanded') === 'true') {
            $(this).attr('aria-expanded', 'false');
        } else {
            $(this).attr('aria-expanded', 'true');
        }
    })
})