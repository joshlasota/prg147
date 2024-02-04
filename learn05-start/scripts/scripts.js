const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Golden Puppy",
    image: "images/gold-dog.jpg",
    caption: "Enjoying the dog days of Summer",
    altTag: "Golden."
};

const dog3 = {
    heading: "Lend me a hand",
    image: "images/snow-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Need a hand."
};

const dog4 = {
    heading: "Sweethearts",
    image: "images/white-dogs.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Aww."
};

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1);
    } else if(dog == 2){
        loadMe(dog2, 2);
    } else if(dog == 3){
        loadMe(dog3, 3);
    } else if(dog == 4){
        loadMe(dog4, 4);
    }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}