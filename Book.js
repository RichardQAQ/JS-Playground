class Book {
    constructor(title, author, year, pages) {
        // Set properties
        this._title = title;
        this._author = author; 
        this._year = year;
        this._pages = pages;  
    }
    
    getInfo() {
        // Return: "Title by Author (Year) - Pages pages"
        return `${this._title} by ${this._author} (${this._year}) - ${this._pages} pages`;
    }

    // Add isClassic() method to Book class (before 1950)
    isClassic() {
        return this._year < 1950;
    }
}

let libraryName = "My Library";
let books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281),
    new Book("1984", "George Orwell", 1949, 328),
    new Book("Pride and Prejudice", "Jane Austen", 1813, 279),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951, 277),
];

// Filter books after 1950
const modernBooks = books.filter(book => book._year > 1950);

// Get only titles  
const bookTitles = books.map(book => book._title);

// Books with 300+ pages
const longBooks = books.filter(book => book._pages >= 300);

// Average pages
const avgPages = books.reduce((sum, book) => sum + book._pages, 0) / books.length;

// Sort by year
const sortedBooks = books.sort((a, b) => a._year - b._year);

console.log(`Welcome to ${libraryName}!`);
console.log("Modern books:", modernBooks.map(b => b.getInfo()));
console.log("Long books:", longBooks.map(b => b.getInfo()));
console.log("Sorted books by year:", sortedBooks.map(b => b.getInfo()));
console.log("All titles:", bookTitles.join(", "));
console.log("Average pages:", Math.round(avgPages));

// Add new book to array
books.push(new Book("Brave New World", "Aldous Huxley", 1932, 311));

// Create findByAuthor(name) function
const findByAuthor = (name) => {
    return books.filter(book => book._author.toLowerCase() === name.toLowerCase());
}

// Demonstrate findByAuthor
console.log("Books by George Orwell:", findByAuthor("George Orwell").map(b => b.getInfo()));

// Demonstrate isClassic method
books.forEach(book => {
    if (book.isClassic()) {
        console.log(`${book._title} is a classic book.`);
    } 
    else {
        console.log(`${book._title} is not a classic book.`);
    }
});

