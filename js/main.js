
console.log("something")
const elements = document.querySelectorAll('.square-item');

function makeSquares() {
    if (window.innerWidth < 992) {
        elements.forEach(el => {
            console.log(el)
            const width = el.offsetWidth
            el.style.height = `${width}px`
        })
    }
    else {
        elements.forEach(el => el.style.height = '');
    }
}

window.addEventListener('load', makeSquares);
window.addEventListener('resize', makeSquares);
window.addEventListener('orientationchange', makeSquares);
