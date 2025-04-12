// script.js
function calculateTip() {
    let bill = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (bill > 0) {
        let tipAmount = bill * tipPercentage;
        let totalAmount = (bill + tipAmount).toFixed(2);

        document.getElementById("totalAmount").textContent = `Total Amount: $${totalAmount}`;
    } else {
        document.getElementById("totalAmount").textContent = "Please enter a valid bill amount!";
    }
}

// Reset function to clear inputs and output
function resetFields() {
    document.getElementById("billAmount").value = "";
    document.getElementById("tipPercentage").value = "0.15"; // Reset to default 15%
    document.getElementById("totalAmount").textContent = "";
}
