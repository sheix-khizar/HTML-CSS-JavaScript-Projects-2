document.addEventListener('DOMContentLoaded', function() {
    const passwordDisplay = document.getElementById('password-display');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const strengthMeter = document.getElementById('strength-meter');
    
    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    
    // Update length value display
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });
    
    // Generate password
    generateBtn.addEventListener('click', generatePassword);
    
    // Copy to clipboard
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Generate initial password
    generatePassword();
    
    function generatePassword() {
        let availableChars = '';
        let password = '';
        
        // Build available characters based on settings
        if (uppercaseCheckbox.checked) availableChars += uppercaseChars;
        if (lowercaseCheckbox.checked) availableChars += lowercaseChars;
        if (numbersCheckbox.checked) availableChars += numberChars;
        if (symbolsCheckbox.checked) availableChars += symbolChars;
        
        // Check if at least one character type is selected
        if (availableChars.length === 0) {
            passwordDisplay.textContent = 'Select at least one character type';
            return;
        }
        
        // Generate password
        const length = parseInt(lengthSlider.value);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }
        
        passwordDisplay.textContent = password;
        checkPasswordStrength(password);
    }
    
    function copyToClipboard() {
        const password = passwordDisplay.textContent;
        if (password === 'Select at least one character type') return;
        
        navigator.clipboard.writeText(password).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    }
    
    function checkPasswordStrength(password) {
        let strength = 0;
        
        // Length contributes to strength
        strength += Math.min(password.length / 4, 3);
        
        // Character variety contributes to strength
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[^A-Za-z0-9]/.test(password);
        
        if (hasUppercase) strength += 1;
        if (hasLowercase) strength += 1;
        if (hasNumbers) strength += 1;
        if (hasSymbols) strength += 1;
        
        // Determine strength level
        let strengthClass, strengthText;
        if (strength < 3) {
            strengthClass = 'weak';
            strengthText = 'Weak';
        } else if (strength < 6) {
            strengthClass = 'medium';
            strengthText = 'Medium';
        } else if (strength < 8) {
            strengthClass = 'strong';
            strengthText = 'Strong';
        } else {
            strengthClass = 'very-strong';
            strengthText = 'Very Strong';
        }
        
        // Update strength meter
        strengthMeter.className = 'strength-meter ' + strengthClass;
        strengthMeter.querySelector('.strength-text').textContent = 
            `Password Strength: ${strengthText}`;
    }
});