const dialog = document.querySelector('dialog');
const addBookBtn = document.querySelector('.add-book-button');
const submitBookBtn = document.querySelector('.submit-book-button')

let libraryContent = document.querySelector('.library');                        //Query Selectors

const myLibrary = [];                                                           //Library Array

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

submitBookBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Book.addBookToLibrary();
    title.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
});                                                                             //Event Listeners

class Book {                                                                    //Book Class

    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read
    }
    
    removeBook(index) {
        myLibrary.splice(index, 1);
    }                                                                           //Book Methods

    static addBookToLibrary(event) {                                            //Add Book Static Method
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').checked;
        let newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook);
        Book.showBook();
        dialog.close();
    }

    static showBook() {                                                         //Render Book Static Method

        let libraryContent = document.querySelector('.library');
    
        libraryContent.innerText = '';
    
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
    
            let bookRead = document.createElement('button');
            bookRead.addEventListener('click', () => {
                myLibrary[i].toggleRead();
                updateRead();
            });
    
            let removeBookBtn = document.createElement('button');               //Remove Book Button
            removeBookBtn.innerText = 'x'
            removeBookBtn.addEventListener('click', () => {
                const index = myLibrary.indexOf(book);
                myLibrary[index].removeBook(index);
                Book.showBook();
            });
            
            function updateRead() {                                             //Read = !Read Button
            if (book.read === true) {
                bookRead.innerText = 'Read';
                bookRead.style.backgroundColor = 'green';
            } else {
                bookRead.innerText = 'Not Read';
                bookRead.style.backgroundColor = 'red';
            }
            };
    
            updateRead();
    
            bookRead.classList.add('book-read-button');
            removeBookBtn.classList.add('remove-book-button');
    
            libraryContent.appendChild(bookCard);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookRead);
            bookCard.appendChild(removeBookBtn);
        }
    }
}