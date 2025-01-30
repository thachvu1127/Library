const myBookArray = [];
const reviewContainer = document.querySelector(".review-container");


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myBookArray.push(newBook);
}

function displayBook() {
    if (myBookArray.length === 0) {
        return "Collections have 0 Books"
    }
    else {
        myBookArray.forEach((book) => {
            let bookTitle = document.createElement("p");
            bookTitle.textContent = book.title;
            reviewContainer.appendChild(bookTitle);
        })
    }
}



// addBookToLibrary("dadada", "dadada", 32, true);
// addBookToLibrary("dadada", "dadada", 32, true);
// addBookToLibrary("dadada", "dadada", 32, true);
// addBookToLibrary("dadada", "dadada", 32, true);
// addBookToLibrary("dadada", "dadada", 32, true);
// displayBook();