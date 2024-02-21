// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let lyrics = '';

for (let i = 99; i > 0; i--) {
    lyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
    lyrics += "Take one down and pass it around, ";
    
    if (i === 1) {
        lyrics += "no more bottles of beer on the wall.<br><br>";
        lyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
        lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else {
        lyrics += (i - 1) + " bottle" + (i === 2 ? "" : "s") + " of beer on the wall.<br><br>";
    }
}

document.getElementById("beer").innerHTML = lyrics;

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthString = '';

        for (let index in months) {
            monthString += months[index] + "<br>";
        }

        document.getElementById("for-in").innerHTML = monthString;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

const myString = "Hello";
        let letters = '';

        for (let letter of myString) {
            letters += letter + "<br>";
        }

        document.getElementById("for-of").innerHTML = letters;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let number = 1;
        let numbersString = '';

        while (number <= 50) {
            numbersString += number + "<br>";
            number++;
        }

        document.getElementById("while").innerHTML = numbersString;