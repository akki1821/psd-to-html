// DOM elements
const carouselContainer = document.querySelector('.carousel');
const carouselItems = Array.from(carouselContainer.children);

// Configuration
const slideDuration = 5000; // Change slide every 3 seconds

// Variables
let currentSlide = 0;

// Set initial active slide
carouselItems[currentSlide].classList.add('active');

// Function to switch slides
function switchSlide() {
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
}

// Start the carousel
const carouselInterval = setInterval(switchSlide, slideDuration);

// Pause the carousel on hover
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

// Resume the carousel on mouse leave
carouselContainer.addEventListener('mouseleave', () => {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(switchSlide, slideDuration);
});
