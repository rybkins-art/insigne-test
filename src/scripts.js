/*
* Обработчик события клика по документу
*/
/* function targetHandler(target, cb) {
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

(document.onload = function() {
    
    /*

    // Бургер меню
    $('.js-site-burger').on('click', function(evt) {
        $(this).toggleClass('active');
        $('.js-site-nav').toggleClass('active');
    });

    // Бургер меню
    $('.js-site-nav').on('click', function(evt) {
        $('.js-site-burger').removeClass('active');
        $('.js-site-nav').removeClass('active');
    }); */

//})();