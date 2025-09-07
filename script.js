function calculateBMI() {
    const weightInput = prompt('Enter your weight in kilograms:');
    const heightInput = prompt('Enter your height in meters:');



const weight = parseFloat(weightInput);
    const heightCm = parseFloat(heightInput); 


    let height = heightCm/100;

    let bmi = weight/(height*height);

    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;

}