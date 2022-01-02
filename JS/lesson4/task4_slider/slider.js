const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot"),
    autoPrev = document.getElementById("auto-prev"),
    autoNext = document.getElementById("auto-next"),
    btnStop = document.getElementById("stop");

let index = 0;
let timer = null;
const activeSlide = a => {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[a].classList.add("active");
}
const activeDot = a => {
    for (let dot of dots) {
        dot.classList.remove("active");
    }
    dots[a].classList.add("active");
}

function activeElement(a) {
    activeSlide(a);
    activeDot(a);
}
const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeElement(index);
    } else {
        index++;
        activeElement(index);
    }
}

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
        activeElement(index);
    } else {
        index--;
        activeElement(index);
    }
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        activeElement(index);
    })
})

function nextInterval() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 2000);
}

function prevInterval() {
    clearInterval(timer);
    timer = setInterval(prevSlide, 2000);
}

function stopInterval() {
    clearInterval(timer);
}
autoNext.addEventListener("click", nextInterval);
autoPrev.addEventListener("click", prevInterval);
btnStop.addEventListener("click", stopInterval);