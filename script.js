const slides = document.querySelectorAll(".slider-wrap");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let count = 0;
nextBtn.addEventListener("click", () => {
    count++;
    sliding();
})
prevBtn.addEventListener("click", () => {
    count--;
    sliding();
})

function sliding() {
    if (count === slides.length) {
        count = 0;
    }
    if (count < 0) {
        count = slides.length - 1;
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${count * 100}%)`
    });
}