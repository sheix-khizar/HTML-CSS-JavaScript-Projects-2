document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const loanAmount = document.getElementById('loan-amount');
    const interestRate = document.getElementById('interest-rate');
    const loanTerm = document.getElementById('loan-term');
    const resultDiv = document.getElementById('result');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    calculateBtn.addEventListener('click', calculateLoan);
    
    function calculateLoan() {
        const amount = parseFloat(loanAmount.value);
        const interest = parseFloat(interestRate.value) / 100 / 12;
        const term = parseFloat(loanTerm.value) * 12;
        
        if (isNaN(amount) || isNaN(interest) || isNaN(term)) {
            alert('Please fill in all fields with valid numbers');
            return;
        }
        
        // Calculate monthly payment
        const x = Math.pow(1 + interest, term);
        const monthly = (amount * x * interest) / (x - 1);
        
        // Calculate total payment and interest
        const total = monthly * term;
        const interestTotal = total - amount;
        
        // Display results
        monthlyPayment.textContent = `$${monthly.toFixed(2)}`;
        totalPayment.textContent = `$${total.toFixed(2)}`;
        totalInterest.textContent = `$${interestTotal.toFixed(2)}`;
        
        resultDiv.classList.remove('hidden');
    }
    
    // Format inputs for better UX
    [loanAmount, interestRate, loanTerm].forEach(input => {
        input.addEventListener('focus', function() {
            this.select();
        });
    });
});