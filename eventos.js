document.addEventListener('DOMContentLoaded', function() {
    const divBtn = document.getElementById('divBtn');
    let lastClickedElement = '';
    divBtn.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'BUTTON') {
            if (lastClickedElement !== 'button') {
                lastClickedElement = 'button';
            }
            event.stopPropagation();
        } else {
            if (lastClickedElement !== 'div') {
                alert('¡Hola! Soy el div');
                lastClickedElement = 'div';
            }
        }
    });
});