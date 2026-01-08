function handleKeyPress(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault();
    }
}
const numberInput = document.querySelector('#numero');
numberInput.addEventListener('keypress', handleKeyPress);
