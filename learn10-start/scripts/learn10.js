function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let roundNumber = Math.round(5.49);
    document.getElementById("round").innerText = "Rounded number: " + roundNumber;

    let ceilNumber = Math.ceil(5.01);
    document.getElementById("ceil").innerText = "Ceiled number: " + ceilNumber;

    let floorNumber = Math.floor(5.99);
    document.getElementById("floor").innerText = "Floored number: " + floorNumber;

    let truncNumber = Math.trunc(5.99);
    document.getElementById("trunc").innerText = "Truncated number: " + truncNumber;

    let signNumber = Math.sign(-5);
    document.getElementById("sign").innerText = "Sign of the number: " + signNumber;

    let powResult = Math.pow(2, 3);
    document.getElementById("pow").innerText = "Power result: " + powResult;

    let minResult = Math.min(5, 3, 9, 2);
    document.getElementById("min").innerText = "Minimum number: " + minResult;

    let randomResult = Math.random();
    document.getElementById("random").innerText = "Random number between 0 and 1: " + randomResult;

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    let randomInteger = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random2").innerText = "Random integer between 1 and 100: " + randomInteger;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let comparison1 = 5 == "5";
    let comparison2 = 5 == 5;

    let comparison3 = 5 === "5";
    let comparison4 = 5 === 5;

    document.getElementById("comparisons").innerHTML = 
      "Comparison using == (with type coercion):<br>" +
      "5 == '5': " + comparison1 + "<br>" +
      "5 == 5: " + comparison2 + "<br><br>" +
      "Comparison using === (strict equality):<br>" +
      "5 === '5': " + comparison3 + "<br>" +
      "5 === 5: " + comparison4;

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}