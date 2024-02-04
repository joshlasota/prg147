function start() {
    // print your name to the name heading
    document.getElementById("name").innerHTML = "Josh LaSota";

    // calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = "String Length: " + myString.length;

    // print a string to the escape paragraph that uses three different escape sequences
    document.getElementById("escape").innerHTML = "Escape Sequences: She said, \"Hello\", and smiled.";

    // create a variable named 'name' and store your complete name in it
    let name = "Josh LaSota";

    // Use the JavaScript slice function to display your first name to first paragraph
    document.getElementById("first").innerHTML = "First Name: " + name.slice(0, name.indexOf(" "));

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    document.getElementById("middle").innerHTML = "Middle Name: " + name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));

    // Use the JavaScript subst Method to display your last name to the last paragraph
    document.getElementById("last").innerHTML = "Last Name: " + name.substr(name.lastIndexOf(" ") + 1);

    // use the replace method to put your major in a new string and print to the major paragraph
    let major = "I'm majoring in Physical Therapy at McHenry County College";
    document.getElementById("major").innerHTML = "Major: " + major.replace("Physical Therapy", "Computer Science");

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It's a great day to be alive!";
    document.getElementById("upper").innerHTML = "Upper Case: " + myText.toUpperCase();

    // Use the trim() method to remove white spaces from the following variable and print to the trim paragraph
    let trimText = "                  McHenry County College                ";
    document.getElementById("trim").innerHTML = "Trimmed Text: " + trimText.trim();

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph
    let months = "January, February, March, April, May, June, July, August, September, October, November, December";
    document.getElementById("index").innerHTML = "Index of 'May': " + months.indexOf("May");

    // create template literals for both your first and last name (name the variables first and last)
    let firstName = "Josh";
    let lastName = "LaSota";

    // Use Variable substitutions to create a greeting that incorporates your first and last name and print to the greeting paragraph
    let greeting = `Hello, my name is ${firstName} ${lastName}. Nice to meet you!`;
    document.getElementById("greeting").innerHTML = greeting;
}