const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0  ||  weight === '' || height === '' || weight === null || height === null) {
    alert('Please enter valid positive numbers for weight and height.');  
    return;
  }
  const result = document.getElementById('result');
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }
  result.textContent = `Your BMI is ${bmi} and you are classified as ${category}.`;
  result.style.display = 'block'; 
  document.getElementById('weight').value = '';
  document.getElementById('height').value = ''; 

  document.getElementById('weight').focus();
  document.getElementById('height').focus();

  
})
