function openModal(modalSelector, modalTimer) {
    let modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimer) {
        clearInterval(modalTimer);
    }
    
}

function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = 'overlay';
}

function modal(triggerSelector, modalSelector, modalTimer) {
    let modal = document.querySelector(modalSelector),
        triggerModal = document.querySelectorAll(triggerSelector);

    triggerModal.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimer));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };