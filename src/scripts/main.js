//import 'bootstrap';

//import player from "./video.js";

$(function() {
    $('.video-content').on('click', function(evt) {
        $(this).addClass('is-playing');

        $("#video")[0].src += "&autoplay=1";
        evt.preventDefault();
    });
});