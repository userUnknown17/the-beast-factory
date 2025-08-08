
// Reveal on scroll
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

// BMI Calculator
const bmiForm = document.getElementById('bmiForm');
if (bmiForm) {
  bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultEl = document.getElementById('bmiResult');
    if (!weight || !heightCm || heightCm <= 0 || weight <= 0) {
      resultEl.textContent = 'Please enter valid numbers';
      return;
    }
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';
    resultEl.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
  });
}
