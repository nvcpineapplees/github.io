$(document).ready(function() {
    $('.dropdown').hover(function() {
        $('.dropdown-content', this).stop(true, true).slideDown('fast');
    }, function() {
        $('.dropdown-content', this).stop(true, true).slideUp('fast');
    });
});
