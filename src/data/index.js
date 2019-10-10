/* Данные с сервера */

let productList = {
	1: {
        id: 1,
        title: 'Василёк-Спорт',
        gender: 1,
        src: 'images/product/1.jpg',
        price: 3700,
        status: ''
    },

    2: {
        id: 2,
        title: 'Соловей',
        gender: 1,
        src: 'images/product/2.jpg',
        price: 1960,
        status: ''
    },

    3: {
        id: 3,
        title: 'Альфа',
        gender: 0,
        src: 'images/product/3.jpg',
        price: 2450,
        status: ''
    },

    4: {
        id: 4,
        title: 'Василиса-Адвенчур',
        gender: 0,
        src: 'images/product/4.jpg',
        price: 1790,
        status: 'new'
    },

    ///////
    15: {
        id: 15,
        title: 'Пинки',
        gender: 0,
        src: 'images/gallery/1.png',
        price: 5400,
        status: ''
    },
    ///////

    5: {
        id: 5,
        title: 'Пастух',
        gender: 1,
        src: 'images/product/5.jpg',
        price: 5300,
        status: ''
    },

    6: {
        id: 6,
        title: 'Звезда',
        gender: 0,
        src: 'images/product/6.jpg',
        price: 5300,
        status: ''
    },

    //Childrens
    7: {
        id: 7,
        title: 'Карапуз',
        gender: 2,
        src: 'images/product/7.jpg',
        price: 2240,
        status: ''
    },
    8: {
        id: 8,
        title: 'Принцесса',
        gender: 3,
        src: 'images/product/8.jpg',
        price: 2900,
        status: 'hit'
    },
    9: {
        id: 9,
        title: 'Ронда',
        gender: 2,
        src: 'images/product/9.jpg',
        price: 2900,
        status: ''
    },
    10: {
        id: 10,
        title: 'Шмель',
        gender: 2,
        src: 'images/product/10.jpg',
        price: 2240,
        status: ''
    },
    //Childrens

    11: {
        id: 11,
        title: 'Подольск-Спорт',
        gender: 1,
        src: 'images/product/11.jpg',
        price: 1700,
        status: 'hit'
    },
    12: {
        id: 12,
        title: 'Петруха',
        gender: 1,
        src: 'images/product/12.jpg',
        price: 4150,
        status: ''
    },
    13: {
        id: 13,
        title: 'Кукушка',
        gender: 0,
        src: 'images/product/13.jpg',
        price: 1700,
        status: ''
    },
    14: {
        id: 14,
        title: 'Бунтарь',
        gender: 1,
        src: 'images/gallery/6.png',
        price: 5400,
        status: ''
    },
};

let basketList = {
};

let genderMap = [
    'Женские валенки',
    'Мужские валенки',
    'Для девочек',
    'Для мальчиков',
]

export default {
    productList,
    basketList,
    genderMap
};