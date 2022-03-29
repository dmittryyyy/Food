window.addEventListener("DOMContentLoaded", function() {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        cards = require('./modules/cards'),
        calculating = require('./modules/calculating'),
        timer = require('./modules/timer');


    tabs();
    modal();
    forms();
    slider();
    cards();
    calculating();
    timer();
});






