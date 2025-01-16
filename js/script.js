const burger = document.querySelector(".burger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const sideMenuLinks = sideMenu.querySelectorAll("a");

burger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

sideMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});

const slider = document.querySelector('.testimonials-slider');
const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.slider-arrow.left');
const nextButton = document.querySelector('.slider-arrow.right');

let currentIndex = 0;
let slideInterval;

// Move to a specific slide
function moveToSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-scroll slides
function startAutoScroll() {
  slideInterval = setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 5000); // Change slide every 3 seconds
}

// Stop auto-scroll on hover
function stopAutoScroll() {
  clearInterval(slideInterval);
}

// Event Listeners
nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));
prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));

slider.addEventListener('mouseover', stopAutoScroll);
slider.addEventListener('mouseout', startAutoScroll);

// Initialize auto-scroll
startAutoScroll();