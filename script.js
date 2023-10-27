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

//myLibrary array
const myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//read-button method
Book.prototype.toggleRead = function() {
    this.read = !this.read
}

//adds new book to array myLibrary
function addBookToLibrary(event) {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    showBook();
    dialog.close();
}

//renders the books in the html
function showBook() {
    //reference library and refreshes innerText every time
    let libraryContent = document.querySelector('.library');
    libraryContent.innerText = '';
    //loop thru myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        let bookTitle = document.createElement('p');
        bookTitle.innerText = `${book.title}`;
        bookTitle.classList.add('book-title');

        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = `by ${book.author}`;
        bookAuthor.classList.add('book-author');

        let bookPages = document.createElement('p');
        bookPages.innerText = `${book.pages} pages`;
        bookPages.classList.add('book-pages');

        //Read = !Read button
        let bookRead = document.createElement('button');
        bookRead.addEventListener('click', () => {
            myLibrary[i].toggleRead();
            updateRead()
        });

        //update read status
        function updateRead() {
        if (book.read === true) {
            bookRead.innerText = 'Read';
            bookRead.style.backgroundColor = 'green';
        } else {
            bookRead.innerText = 'Not Read';
            bookRead.style.backgroundColor = 'red';
        }
    };

        //calls update read function for initial book creation
        updateRead();
        //adds class to button for styling
        bookRead.classList.add('book-read-button');

        //adds all to DOM
        libraryContent.appendChild(bookCard);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
    }
}

