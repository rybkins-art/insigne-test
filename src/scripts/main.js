/*
* Обработчик события клика по документу
*/
function targetHandler(target, cb) {
    var handlerFunc = (evt) => {

        // Вешаем класс - флаг на элемент
        $(target).addClass('targetHandler');

        // Целевой элемент события
        var $target = $(evt.target).closest(target);

        // Если это не target, выболняем callback
        if (!$target.length) {
            cb.apply(this);
            $(target).removeClass('targetHandler');
            $(document).off('click', handlerFunc);
        }
    }

    // Если еще не повесили событие, то вешаем
    if (!$(target).hasClass('targetHandler') ) {
        $(document).on('click', handlerFunc);
    }
}

$(function() {
    // Запускаем проигрыватель
    $('.video-content').on('click', function(evt) {
        $(this).addClass('is-playing');

        $("#video")[0].src += "&autoplay=1";
        evt.preventDefault();
    });

    // Показываем корзину
    $('.header-box__btn').on('click', function(evt) {
        let $target = $('.js-header-box');
        $target.toggleClass('active');

        targetHandler($target, () => {
            $target.removeClass('active');
        });
    });

    // Бургер меню
    $('.js-site-burger').on('click', function(evt) {
        $(this).toggleClass('active');
        $('.js-site-nav').toggleClass('active');
    });

    // Бургер меню
    $('.js-site-nav').on('click', function(evt) {
        $('.js-site-burger').removeClass('active');
        $('.js-site-nav').removeClass('active');
    });

});