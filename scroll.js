const goup = document.querySelector('.sbt');
window.addEventListener('scroll', checkheight);
function checkheight() {
    if (window.scrollY > 200) {
        goup.style.display = "flex";
    } else {
        goup.style.display = "none";
    }
}
goup.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})