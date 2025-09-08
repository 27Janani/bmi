function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;

  const resultDiv = document.getElementById("result");
  const tipsDiv = document.getElementById("tips");

  // Clear old results
  resultDiv.innerHTML = "";
  tipsDiv.innerHTML = "";

  // Validate input
  if (
    isNaN(weight) ||
    isNaN(height) ||
    weight <= 0 ||
    height <= 0 ||
    isNaN(age) ||
    !gender
  ) {
    resultDiv.style.color = "red";
    resultDiv.innerText = "Please enter valid details.";
    return;
  }

  // Convert height to meters if > 3 (assuming cm)
  if (height > 3) {
    height = height / 100;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine category & color
  let category = "";
  let color = "";
  let tips = "";
  if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
    tips = "Try to include more protein and calorie-rich food in your diet.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    color = "green";
    tips = "Great! Maintain your healthy lifestyle.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    color = "darkorange";
    tips = "Consider regular exercise and a balanced diet.";
  } else {
    category = "Obese";
    color = "red";
    tips = "Consult a doctor and follow a proper weight loss plan.";
  }

  // Calculate ideal weight range
  const minIdealWeight = (18.5 * height * height).toFixed(1);
  const maxIdealWeight = (24.9 * height * height).toFixed(1);

  // Display result
  resultDiv.style.color = color;
  resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(
    2
  )}</strong> (${category})<br>
    Ideal Weight Range: ${minIdealWeight}kg - ${maxIdealWeight}kg`;

  tipsDiv.innerHTML = `<strong>Tip:</strong> ${tips}`;
}
