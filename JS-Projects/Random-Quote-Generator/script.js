// script.js
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = `"${quotes[randomIndex].quote}"`;
    document.getElementById("author").textContent = `- ${quotes[randomIndex].author}`;
}

document.getElementById("new-quote").addEventListener("click", getRandomQuote);

// Load a random quote when the page loads
getRandomQuote();
