const targetNumber = Math.floor(Math.random() * 1000) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(guess) || guess < 1 || guess > 1000) {
        feedback.textContent = "Please enter a valid number between 1 and 1000.";
        feedback.style.color = "black";
        return;
    }

    const difference = Math.abs(targetNumber - guess);

    if (difference === 0) {
        feedback.textContent = "Congratulations! You guessed the correct number!";
        feedback.style.color = "green";
    } else if (difference <= 5) {
        feedback.textContent = "Hot";
        feedback.style.color = "darkred";
    } else if (difference <= 10) {
        feedback.textContent = "Warm";
        feedback.style.color = "red";
    } else if (difference <= 25) {
        feedback.textContent = "Cold";
        feedback.style.color = "lightblue";
    } else if (difference <= 50) {
        feedback.textContent = "Colder";
        feedback.style.color = "blue";
    } else {
        feedback.textContent = "Coldest";
        feedback.style.color = "darkblue";
    }
}
