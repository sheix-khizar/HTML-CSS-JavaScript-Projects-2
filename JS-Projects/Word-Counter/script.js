function updateCounts() {
    let text = document.getElementById("textInput").value;
    let words = text.trim().split(/\s+/).filter(word => word !== "");
    document.getElementById("wordCount").textContent = words.length;
    document.getElementById("charCount").textContent = text.length;
}

function clearText() {
    document.getElementById("textInput").value = "";
    updateCounts();
}

document.getElementById("textInput").addEventListener("input", updateCounts);