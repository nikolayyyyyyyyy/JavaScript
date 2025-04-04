function toggle() {
    const element = document.querySelector('.button');
    const text = document.querySelector('#extra');
    if (element.textContent === "MORE") {
        text.style.display = 'inline';
        element.textContent = 'LESS'

    } else {
        text.style.display = 'none';
        element.textContent = 'MORE';
    }
}