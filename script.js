const myBookArray = [];


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
            console.log(book);
        })
    }
}

