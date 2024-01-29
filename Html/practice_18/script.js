function calculateBMI(){
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var bmiResult = document.getElementById("bmi-result");
    var bmiCategoryElement = document.getElementById("bmi-category");
    var errorMessage = document.getElementById("error-message");

    bmiResult.textContent = "";
    bmiCategoryElement.textContent = "";
    errorMessage.textContent = "";

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
        errorMessage.textContent = "Enter valid values for height and weight.";
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    bmiResult.textContent = "Your BMI: " + bmi.toFixed(2);

    var bmiCategory = "";

    if(bmi < 18.5){
        bmiCategory = "Underweight";
    } else if(bmi >= 18.5 && bmi < 24.9){
        bmiCategory = "Normal";
    } else if(bmi >= 25 && bmi < 29.9){
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }
    
    bmiCategoryElement.textContent = "BMI Category: " + bmiCategory;
}