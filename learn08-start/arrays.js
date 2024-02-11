function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById("name").innerHTML = "Josh LaSota" 
    // Create an array called months that holds all the months of the year
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ];

    // use the index to print the month May from the months array the may paragraph
    document.getElementById('may').innerText = months[4];

    // print the length of the month array to the length paragraph
    document.getElementById('length').innerText = `The length of the months array is: ${months.length}`;

    // Loop through all of the months array and print each month to the months paragraph
    const monthsParagraph = document.getElementById('months');

    months.forEach(month => {
      const monthNode = document.createElement('p');
      monthNode.innerText = month;
      monthsParagraph.appendChild(monthNode);
    });

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    const stringParagraph = document.getElementById('string');

    const monthsString = months.join(', ');
    stringParagraph.innerText = monthsString;

    // create two new arrays - weekends and weekdays, add the appropriate days to each
    const daysOfWeek = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
      ];
      
      const weekends = daysOfWeek.filter(day => day === "Saturday" || day === "Sunday");
      const weekdays = daysOfWeek.filter(day => day !== "Saturday" && day !== "Sunday");

    // join the two arrays into a new array - week
    const week = weekdays.concat(weekends);

    // print the contents of week to the week paragraph
    document.getElementById('week').innerText = week.join(', ');

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    const poppedElement = week.pop();
    document.getElementById('pop').innerText = week.join(', ');

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    
    fruits.push("Banana", "Orange");
    document.getElementById('fruits').innerText = fruits.join(', ');

    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    
    fruits.unshift("Pineapple");
    document.getElementById('fruits2').innerText = fruits.join(', ');

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
    const sortedLanguages = languages.slice().sort();
    document.getElementById('sorted').innerText = sortedLanguages.join(', ');
        // reverse the array languages and print to the paragraph reversed
    const reversedLanguages = languages.slice().reverse();
    document.getElementById('reversed').innerText = reversedLanguages.join(', ');

    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9]

    function compareNumbers(a, b) {
        return a - b;
    }
    const sortedNumbers = numbers.slice().sort(compareNumbers);
    document.getElementById('num-sorted').innerText = sortedNumbers.join(', ');

    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}