let numberDisplay = document.getElementById("number");
let generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    numberDisplay.textContent = "Random Number: " + randomNumber;
});