let toggleBtn = document.getElementById("toggleBtn");
let text = document.getElementById("text");

toggleBtn.addEventListener("click", function() {
    if (text.style.display === "none") {
        text.style.display = "block";
        toggleBtn.textContent = "Hide Text";
    } else {
        text.style.display = "none";
        toggleBtn.textContent = "Show Text";
    }
});