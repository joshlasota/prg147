// Object constructor for Beatles albums
function BeatlesAlbum(title, releaseYear, genre, tracks, coverImage, description) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.tracks = tracks;
    this.coverImage = coverImage;
    this.description = description;
}

// Function to display Beatles albums on the webpage
function displayAlbums() {
    const albums = [
        new BeatlesAlbum("Abbey Road", 1969, "Rock", ["Come Together", "Something", "Octopus's Garden", "I Want You", "Here Comes the Sun", "The End"], "images/abbey_road.jpg", "The final studio album by The Beatles."),
        new BeatlesAlbum("Revolver", 1966, "Rock", ["Taxman", "Eleanor Rigby", "Yellow Submarine", "Tomorrow Never Knows"], "images/revolver.jpg", "A groundbreaking album with diverse musical styles."),
        new BeatlesAlbum("Rubber Soul", 1965, "Rock", ["Norwegian Wood", "In My Life", "Nowhere Man", "Michelle"], "images/rubber_soul.jpg", "Marked a shift towards a more introspective and sophisticated sound."),
        new BeatlesAlbum("Sgt. Pepper's Lonely Hearts Club Band", 1967, "Rock", ["Lucy in the Sky with Diamonds", "With a Little Help from My Friends", "A Day in the Life"], "images/sgt_pepper.jpg", "Considered one of the greatest albums of all time."),
        new BeatlesAlbum("The White Album", 1968, "Rock", ["Back in the USSR", "While My Guitar Gently Weeps", "Helter Skelter", "Blackbird"], "images/white_album.jpg", "A double album with a wide range of musical styles.")
    ];

    const albumContainer = document.getElementById('album-container');

    // Loop through each album and create HTML templates
    albums.forEach(album => {
        const albumTemplate = `
            <div class="album">
                <img src="${album.coverImage}" alt="${album.title} Cover">
                <h2>${album.title}</h2>
                <p><strong>Release Year:</strong> ${album.releaseYear}</p>
                <p><strong>Genre:</strong> ${album.genre}</p>
                <p><strong>Tracks:</strong> ${album.tracks.join(', ')}</p>
                <p><strong>Description:</strong> ${album.description}</p>
            </div>
        `;
        albumContainer.innerHTML += albumTemplate;
    });
}