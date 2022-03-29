import tabs from './modules/tabs';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import cards from './modules/cards';
import calculating from './modules/calculating';
import timer from './modules/timer';
import {openModal} from './modules/modal';
window.addEventListener("DOMContentLoaded", function () {

    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 40000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
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






