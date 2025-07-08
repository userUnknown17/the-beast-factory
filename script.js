// ====== BMI Calculator ======
document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  const heightM = heightCm / 100;

  if (!weight || !heightCm || heightCm <= 0 || weight <= 0) {
    document.getElementById('bmiResult').textContent = 'Please enter valid weight and height.';
    return;
  }

  const bmi = weight / (heightM * heightM);
  let message = '';

  if (bmi < 18.5) message = 'Underweight';
  else if (bmi < 24.9) message = 'Normal';
  else if (bmi < 29.9) message = 'Overweight';
  else message = 'Obese';

  document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(1)} (${message})`;
});

// ====== Reveal on Scroll ======
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ====== 3D Card Tilt Effect (for mouse hover) ======
document.querySelectorAll('.card.bg-glass').forEach(card => {
  card.addEventListener('mousemove', e => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth: w, offsetHeight: h } = target;
    const rotateX = ((offsetY - h / 2) / h) * 15;
    const rotateY = ((offsetX - w / 2) / w) * -15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

// ====== Smooth Scroll (enhanced with reveal trigger) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        target.classList.add('active');
      }, 300);
    }
  });
});

// ====== Typing Animation on Hero Title ======
const heroTitle = document.querySelector('.hero-section h1');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 80);
    }
  }
  typeChar();
}
