var element = document.getElementById('keycode');
window.addEventListener('keydown', function(event) {
    event.preventDefault();
    element.textContent = event.keyCode;
});
    