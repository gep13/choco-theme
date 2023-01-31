import { Modal } from 'bootstrap';

(() => {
    const autoCloseModal = document.querySelectorAll('.modal-auto-close');

    autoCloseModal.forEach(el => {
        const autoCloseModalTrigger = el.querySelector('.modal-auto-close-btn');

        autoCloseModalTrigger.addEventListener('click', () => {
            const autoCloseModalInstance = Modal.getOrCreateInstance(el, { keyboard: false, backdrop: 'static' });

            autoCloseModalInstance.hide();
        });
    });
})();
