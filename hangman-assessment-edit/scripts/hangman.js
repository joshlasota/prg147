let game = ["GUITAR", "BASS", "DRUMS", "KEYS", "JEDI", "EMPIRE", "PUPPY", "XBOX", "SWITCH", "PEPPER"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = new Array(myLength);
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let usedLetters = []; // Array to store used letters
let hangmanImageIndex = 0; // Index to track hangman image

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output += display[i];
    }
    document.getElementById("word").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value.toUpperCase();
    document.getElementById("guess").value = '';

    // Check if the letter has been already used
    if (usedLetters.includes(userLetter)) {
        alert("You've already used this letter!");
        return;
    }

    usedLetters.push(userLetter); // Add letter to used letters

    found = false; // Reset found flag

    for (let c = 0; c < answer.length; c++) {
        if (userLetter === letters[c]) {
            display[c] = userLetter;
            win--;
            found = true;
        }
        output += display[c] + ' ';
    }
    
    if (!found) {
        attemptsLeft--;
        hangmanImageIndex++;
        document.getElementById("hangman").src = "images/0" + (hangmanImageIndex + 1) + ".png"; // Update hangman image
    }

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    document.getElementById("word").innerHTML = output;
    document.getElementById("guessed").innerHTML = 'Used Letters: ' + usedLetters.join(', '); // Display used letters
});
