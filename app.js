const laguna = document.getElementById('cajon');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 150) {
        cajon.style.backgroundColor = 'lightgray';
    } else {
        cajon.style.backgroundColor = 'white'
    }
});