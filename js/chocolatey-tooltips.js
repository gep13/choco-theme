import { Tooltip } from 'bootstrap';

(() => {
    // Initialize Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    // eslint-disable-next-line no-unused-vars
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
})();
