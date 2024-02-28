/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const moviesList = [
    "Star Wars",
    "The Avengers",
    "Dune: Part 2",
    "Spider-Man",
    "The Incredible Hulk"
  ];

  const listElement = document.getElementById("list");
  moviesList.forEach(movie => {
    const movieElement = document.createElement("span");
    movieElement.textContent = movie;

    listElement.appendChild(movieElement);

    if (moviesList.indexOf(movie) !== moviesList.length - 1) {
      listElement.appendChild(document.createTextNode(", "));
    }
  });
/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songSet = new Set([
    "Doctor Robert",
    "Just To Put Me Down",
    "A Hard Day's Night",
    "Band on the Run",
    "Hey Jude"
  ]);

  const setElement = document.getElementById("set1");

  setElement.textContent = "Songs: " + [...songSet].join(", ");

// add two more songs to the set then display in the set2 paragraph
songSet.add("Imagine");
songSet.add("Like a Rolling Stone");

const setElement2 = document.getElementById("set2");
setElement2.textContent = "Songs: " + [...songSet].join(", ");
/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const emailMap = new Map([
    ["John", "john@example.com"],
    ["Alice", "alice@example.com"],
    ["Bob", "bob@example.com"],
    ["Emma", "emma@example.com"],
    ["David", "david@example.com"]
  ]);

  const mapElement = document.getElementById("map1");

  mapElement.textContent = "Names and Emails: ";
  emailMap.forEach((value, key) => {
    mapElement.textContent += `${key}: ${value}, `;
  });
// add two new names and emails and display in map2 use the forEach() method
emailMap.set("Eva", "eva@example.com");
emailMap.set("Michael", "michael@example.com");

const mapElement2 = document.getElementById("map2");
mapElement2.textContent = "Names and Emails: ";
emailMap.forEach((value, key) => {
mapElement2.textContent += `${key}: ${value}, `;
});
// get and display the email of one person, display in map3
const personName = "Bob";
const personEmail = emailMap.get(personName);

const mapElement3 = document.getElementById("map3");
mapElement3.textContent = `${personName}'s email is: ${personEmail}`;