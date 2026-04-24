document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('heroSlider');
  const slides = slider.querySelectorAll('.slide-item');
  const dots = slider.querySelectorAll('.dot');
  let cur = 0;

  function goTo(n) {
    slides[cur].classList.remove('slide-active');
    dots[cur].classList.remove('active');
    dots[cur].style.width = '';
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('slide-active');
    dots[cur].classList.add('active');
  }

  document.getElementById('sliderNext').onclick = () => goTo(cur + 1);
  document.getElementById('sliderPrev').onclick = () => goTo(cur - 1);
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  let timer = setInterval(() => goTo(cur + 1), 5000);
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(cur + 1), 5000);
  });
});