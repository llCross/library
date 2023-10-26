//add button
const dialog = document.querySelector('dialog');
const addBookBtn = document.querySelector('.add-book-button');
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

//submit button
const submitBookBtn = document.querySelector('.submit-book-button')
submitBookBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    title.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
});


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//adds new book to array myLibrary
function addBookToLibrary(event) {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    console.log(myLibrary)
    dialog.close();
}