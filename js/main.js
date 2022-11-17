require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modalController';
import forms from './modules/forms';
import slider from './modules/sliderController';
import cards from './modules/cards';
import calculating from './modules/calculating';
import timer from './modules/timer';
import {openModal} from './modules/modalController';
window.addEventListener("DOMContentLoaded", function () {

    const modalTimer = setTimeout(() => openModal('.modalController', modalTimer), 40000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modalController]', '.modalController');
    forms('form', modalTimer);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    cards();
    calculating();
    timer('.timer', '2022-04-29');
});






