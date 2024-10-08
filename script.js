
// Get references to necessary elements
const carouselContainer = document.querySelector('.full-width-carousel');
const cards = document.querySelectorAll('.full-width-item');
const prevButton = document.querySelector('.carousel-btn.left');
const nextButton = document.querySelector('.carousel-btn.right');

console.log('Carousel Container:', carouselContainer);
console.log('Cards:', cards);
console.log('Previous Button:', prevButton);
console.log('Next Button:', nextButton);

// Check if all elements are found
if (!carouselContainer || cards.length === 0 || !prevButton || !nextButton) {
    console.error('Error: One or more required elements are not found.');
}

// Set initial values
let currentIndex = 0;
const cardWidth = cards.length ? cards[0].offsetWidth : 0;
const carouselWidth = carouselContainer ? carouselContainer.offsetWidth : 0;
const maxVisibleCards = carouselWidth && cardWidth ? Math.floor(carouselWidth / cardWidth) : 1;

console.log('Initial values - Card Width:', cardWidth, 'Carousel Width:', carouselWidth, 'Max Visible Cards:', maxVisibleCards);

// Function to update the carousel position
function updateCarousel() {
  console.log('Updating carousel to index:', currentIndex);
  const offset = -currentIndex * cardWidth;
  if (carouselContainer) {
      carouselContainer.style.transform = `translateX(${offset}px)`;
  }
}

// Event listeners for buttons
prevButton && prevButton.addEventListener('click', () => {
  console.log('Previous button clicked');
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

nextButton && nextButton.addEventListener('click', () => {
  console.log('Next button clicked');
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

// Initial update
updateCarousel();
