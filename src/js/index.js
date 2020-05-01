import $ from 'jquery';
import Swiper from 'swiper';
import 'lightgallery';
window.$ = $;

$(document).ready(function() {
    $('.js-gallery').each(function() {
        $(this).lightGallery({
            selector: '.js-gallery-item',
            showThumbByDefault: false,
            download: false,
        });
    });
});