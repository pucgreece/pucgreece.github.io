// --- Hero Slideshow ---
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide


// --- Scroll Animations ---
const animatedElements = document.querySelectorAll("[data-animate]");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
