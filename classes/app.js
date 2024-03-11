class Book {
    constructor(title, author, genre, pageCount) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
    }

    bookInfo() {
        return `The book "${this.title}" by ${this.author} is a ${this.genre} book with ${this.pageCount} pages.`;
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "fiction", 281);
const book2 = new Book("1984", "George Orwell", "dystopian fiction", 328);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "classic", 180);
const book4 = new Book("Pride and Prejudice", "Jane Austen", "romance", 279);

document.getElementById("book1").innerText = book1.bookInfo();
document.getElementById("book2").innerText = book2.bookInfo();
document.getElementById("book3").innerText = book3.bookInfo();
document.getElementById("book4").innerText = book4.bookInfo();
