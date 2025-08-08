// script.js - The Beast Factory V3

// Reveal Elements on Scroll
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
});

// BMI Calculator with Tips & Daily Calorie Estimate
const bmiForm = document.getElementById('bmiForm');
if (bmiForm) {
  bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultEl = document.getElementById('bmiResult');
    const tipsEl = document.getElementById('bmiTips');

    if (!weight || !heightCm || heightCm <= 0 || weight <= 0) {
      resultEl.textContent = 'Please enter valid numbers';
      tipsEl.textContent = '';
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = '', tips = '', calories = 0;

    if (bmi < 18.5) {
      category = 'Underweight';
      tips = 'Eat more calories, focus on strength training, include protein shakes.';
      calories = weight * 35;
    } else if (bmi < 24.9) {
      category = 'Normal';
      tips = 'Maintain a balanced diet, do full-body workouts, and stay hydrated.';
      calories = weight * 30;
    } else if (bmi < 29.9) {
      category = 'Overweight';
      tips = 'Do more cardio, reduce sugar intake, increase vegetables and protein.';
      calories = weight * 25;
    } else {
      category = 'Obese';
      tips = 'Start with light activity, consult a trainer, reduce calories gradually.';
      calories = weight * 20;
    }

    resultEl.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
    tipsEl.innerHTML = `
      <strong>Tips:</strong> ${tips}<br>
      <strong>Estimated Daily Calories:</strong> ${calories} kcal
    `;
  });
}

// Typing Animation for Hero Text with Glitch Flicker
const typingText = "THE BEAST FACTORY";
const typingElement = document.querySelector(".hero-section h1");
let index = 0;
function typeText() {
  if (typingElement && index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeText, 150);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) {
    typingElement.textContent = "";
    typeText();
    typingElement.classList.add("glitch");
  }
});

// Active Navigation Link Based on Scroll Position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// Parallax Rotation Effect on Hero Content
const heroContent = document.querySelector(".hero-section .hero-content");
if (heroContent) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    heroContent.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// 3D Parallax Hover on Program Cards
const parallaxCards = document.querySelectorAll(".parallax-card");
parallaxCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Add Spin to Gear Icon on Hover
const gearIcons = document.querySelectorAll('.product-card .bi-gear');
gearIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('spin');
  });
  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('spin');
  });
});

// Product Modal with WhatsApp Redirect
function showProductPopup(name, description, price) {
  document.getElementById('productTitle').textContent = name;
  document.getElementById('productDescription').textContent = `${description} Price: ${price}`;

  // Set untuk checkout form Google Form
  document.getElementById('productNameInput').value = name;
  document.getElementById('productPriceInput').value = price;

  const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  modal.show();
}



// Scroll-Based Power Level Bar
const powerBar = document.getElementById("powerBar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  powerBar.style.width = `${scrollPercent}%`;
});


  function showProductPopup(productName, description, price) {
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    document.getElementById('productNameInput').value = productName;
    document.getElementById('productPriceInput').value = price.replace('RM', '');
    modal.show();
  }

