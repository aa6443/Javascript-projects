const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height) || weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide valid height and weight`;
  } else {
    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
