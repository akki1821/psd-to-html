const carouselContainer = document.querySelector(".carousel");
const carouselItems = Array.from(carouselContainer.children);

const slideDuration = 2000;

let currentSlide = 0;
let carouselInterval;

carouselItems[currentSlide].classList.add("active");

function switchSlide() {
  carouselItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add("active");
}

carouselInterval = setInterval(switchSlide, slideDuration);

carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(carouselInterval);
});

carouselContainer.addEventListener("mouseleave", () => {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(switchSlide, slideDuration);
});
