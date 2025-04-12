// script.js
async function getJoke() {
    let jokeText = document.getElementById("joke");

    jokeText.textContent = "Loading... 😂";

    try {
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();
        jokeText.textContent = `${data.setup} 🤣 ${data.punchline}`;
    } catch (error) {
        jokeText.textContent = "Oops! Couldn't load a joke. Try again!";
    }
}
