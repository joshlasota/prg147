function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Josh LaSota"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    const number = 5;
    const string = "2";
    const result = number + string;
    document.getElementById("add").textContent = `${number} + ${string} = ${result}`;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let x = 187;
    document.getElementById("to-string").innerHTML =
        x.toString() + "<br>" +
            (187).toString() + "<br>" +
            (100 + 87).toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let y = 1.678;
    document.getElementById("exponent").innerHTML =
      y.toExponential() + "<br>" + 
      y.toExponential(2) + "<br>" + 
      y.toExponential(4) + "<br>" + 
      y.toExponential(6);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML =
      y.toFixed(0) + "<br>" +
      y.toFixed(2) + "<br>" +
      y.toFixed(4) + "<br>" +
      y.toFixed(6);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = 
    y.toPrecision() + "<br>" +
    y.toPrecision(2) + "<br>" +
    y.toPrecision(4) + "<br>" +
    y.toPrecision(6);  

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = 
    parseFloat("25") + "<br>" +
    parseFloat("25.66") + "<br>" +
    parseFloat("25 10") + "<br>" +  
    parseFloat("25 days") + "<br>" +
    parseFloat("days 25");  

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = 
    parseInt("-25") + "<br>" +
    parseInt("-25.55") + "<br>" +
    parseInt("25") + "<br>" +
    parseInt("25.55") + "<br>" +
    parseInt("25 10") + "<br>" +  
    parseInt("25 days") + "<br>" +  
    parseInt("days 25");  


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "== and === are similar in principle, but === is more strict when it comes to comparing two variables. == will ignore the datatype, whereas === which will look into that information."
    

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "'and' operators are evaluated first before 'or' operators."


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
var answer = window.prompt("Type 1, 2,or 3. Then click OK.");

if (answer === "1") {
    console.log("You said 1!");
} else if (answer === "2") {
    console.log("You said 2!")
} else if (answer === "3") {
    console.log("You said 3!")
} else {
    console.log("That is not a valid option.")
}

switch (answer) {
    case "1":
        console.log("You said 1!");
        break;
    case "2":
        console.log("You said 2!");
        break;
    case "3":
        console.log("You said 3!");
        break;
    default:
        console.log("That is not a valid option.")
        break;
}

document.getElementById("switch").textContent = answer;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    function start() {
    let a = 10;

    let result = (a > 5) ? "a is greater than 5" : "a is not greater than 5";

    document.getElementById("ternary").textContent = result; 
    }   
}