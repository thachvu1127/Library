const myBookArray = [];
const reviewContainer = document.querySelector(".review-container");
const newBookBtn = document.querySelector(".review-btn");


function Book(title, author, pages) {
    this.title = title,
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let newBook = new Book(title, author, bookPages);
    myBookArray.push(newBook);
    displayBook();
}

function displayBook() {
    if (myBookArray.length === 0) {
        return "Collections have 0 Books"
    }
    else {
        let currentBook = myBookArray[myBookArray.length - 1];
        addBookReviewCard(currentBook);
    }
}

function createDiv(divClass) {
    const div = document.createElement("div");
    div.classList.add(divClass);
    return div;
}

function addReviewImg() {
    // function adds and image tag to a div and returns the div
    const div = createDiv("book-img");
    const img = document.createElement("img");
    setImgSource(img, "img/small_book.jpg");
    img.classList.add("small-book");
    div.appendChild(img);
    return div;
}

function setImgSource(imgElement, src) {
    // function sets the source of an image element
    imgElement.src = src;
}

function addBookContent(obj) {
    const div = createDiv("book-content");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = obj.title;
    const pages = document.createElement("p");
    pages.textContent = `${obj.pages} pages`
    const author = document.createElement("p");
    author.textContent = obj.author;
    div.append(bookTitle, pages, author)
    return div
}

function addBookReviewCard(obj) {
    const article = document.createElement("article");
    article.classList.add("article-container");
    const bookImg = addReviewImg();
    const bookContent = addBookContent(obj);
    article.append(bookImg, bookContent);
    reviewContainer.appendChild(article);
}


const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    modal.close();
})

newBookBtn.addEventListener("click", () => {
    modal.showModal();
})


const bookForm = document.querySelector("#modal-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
});
