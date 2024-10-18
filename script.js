// Показувати кнопку, коли сторінка прокручується вниз
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Функція для прокручування вгору
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}