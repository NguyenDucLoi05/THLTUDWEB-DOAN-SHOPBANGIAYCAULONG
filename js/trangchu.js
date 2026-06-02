document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  if (slides.length === 0) return;
  let currentSlide = 0;

  function changeSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });
  prevBtn.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });
  setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 4000);
});
