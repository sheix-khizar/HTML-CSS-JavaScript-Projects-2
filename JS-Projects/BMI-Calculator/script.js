document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const healthTip = document.getElementById('health-tip');
    
    calculateBtn.addEventListener('click', calculateBMI);
    
    function calculateBMI() {
        const height = parseFloat(heightInput.value) / 100; // Convert cm to m
        const weight = parseFloat(weightInput.value);
        
        if (isNaN(height) || isNaN(weight)) {
            alert('Please enter valid height and weight');
            return;
        }
        
        const bmi = (weight / (height * height)).toFixed(1);
        displayResult(bmi);
    }
    
    function displayResult(bmi) {
        bmiValue.textContent = bmi;
        
        let category = '';
        let tip = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            tip = 'Consider consulting a nutritionist to develop a healthy weight gain plan.';
            bmiCategory.className = 'underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
            tip = 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.';
            bmiCategory.className = 'normal';
        } else if (bmi < 30) {
            category = 'Overweight';
            tip = 'Try to incorporate more physical activity into your routine and watch your calorie intake.';
            bmiCategory.className = 'overweight';
        } else {
            category = 'Obese';
            tip = 'Consider consulting a healthcare professional for guidance on weight management.';
            bmiCategory.className = 'obese';
        }
        
        bmiCategory.textContent = `Category: ${category}`;
        healthTip.textContent = tip;
        resultDiv.classList.remove('hidden');
    }
});
