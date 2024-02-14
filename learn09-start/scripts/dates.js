/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
var currentDate = new Date()
var dateString = currentDate.toDateString();
var timeString = currentDate.toLocaleTimeString();
var fullDateTime = dateString + ' ' + timeString;
document.getElementById("basic").innerHTML = fullDateTime;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var formattedDate = year + '-' + month + '-' + day;
document.getElementById("today").textContent = "Year: " + year + ", Month: " + month + ", Day: " + day;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
var birthdayString = "1998-01-14";
var birthday = new Date(birthdayString);
document.getElementById("birthday").textContent = "My Birthday: " + birthday.toDateString();

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
var currentDate = new Date();
var isoDateString = currentDate.toISOString();
document.getElementById("iso").textContent = "ISO String: " + isoDateString;

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
var currentDate = new Date();

var date1String = currentDate.toLocaleDateString();
document.getElementById("date1").textContent = "Formatted Date 1: " + date1String;

var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');
var date2String = year + "-" + month + "-" + day;
document.getElementById("date2").textContent = "Formatted Date 2: " + date2String;

var date3String = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
document.getElementById("date3").textContent = "Formatted Date 3: " + date3String;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
var currentDate = new Date();

var dayOfWeek = currentDate.getDay();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById("get1").textContent = "Day of the Week: " + dayNames[dayOfWeek];

var month = currentDate.getMonth();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.getElementById("get2").textContent = "Month: " + monthNames[month];

var dayOfMonth = currentDate.getDate();
document.getElementById("get3").textContent = "Day of the Month: " + dayOfMonth;

var hours = String(currentDate.getHours()).padStart(2, '0');
var minutes = String(currentDate.getMinutes()).padStart(2, '0');
var seconds = String(currentDate.getSeconds()).padStart(2, '0');
document.getElementById("get4").textContent = "Current Time: " + hours + ":" + minutes + ":" + seconds;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
var currentDate = new Date();

currentDate.setFullYear(2025);
document.getElementById("set1").textContent = "Set Year: " + currentDate.toDateString();

currentDate.setMonth(6);
document.getElementById("set2").textContent = "Set Month: " + currentDate.toDateString();

currentDate.setDate(15);
document.getElementById("set3").textContent = "Set Day of Month: " + currentDate.toDateString();

currentDate.setHours(10);
currentDate.setMinutes(30);
currentDate.setSeconds(0);
document.getElementById("set4").textContent = "Set Time: " + currentDate.toTimeString();