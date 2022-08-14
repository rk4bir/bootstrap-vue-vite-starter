import "./app.scss"
import * as bootstrap from 'bootstrap'


// initialise tooltips
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
};
