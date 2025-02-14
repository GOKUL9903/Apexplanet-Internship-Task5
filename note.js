document.addEventListener('DOMContentLoaded', function () {
  // Preloader
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.style.display = 'none', 1000);
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  slides[currentSlide].classList.add("active"); // Show the first slide
  setInterval(showNextSlide, 3000); // Change slide every 5 seconds
});
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}