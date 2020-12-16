// Initialize a new BookManager with current ID set to 0
const bookManager = new BookManager(0);
const newBookForm = document.querySelector('#book-form');

newBookForm.addEventListener('submit', (event)=> {
  event.preventDefault();

  const newBookTitle = document.querySelector('#title');
  const newBookAuthor = document.querySelector('#author');
  const newBookLanguage = document.querySelector('#language');
  const newBookDate = document.querySelector('#date');
  const errorMessage = document.querySelector('#alertMessage')

  const title = newBookTitle.value;
  const author = newBookAuthor.value;
  const language = newBookLanguage.value;
  const date = newBookDate.value;

  // Validation form
  if(!validFormFieldInput(title)){
    errorMessage.innerHTML = "Please write the book title.";
    errorMessage.style.display = "block"
  }else if (!validFormFieldInput(author)){
    errorMessage.innerHTML = "Please write the author's name.";
    errorMessage.style.display = "block"
  }else if (!validFormFieldInput(language)) {
    errorMessage.innerHTML = "Please put the language the book is writen.";
    errorMessage.style.display = "block"
  }else if (!validFormFieldInput(date)) {
    errorMessage.innerHTML = "Please select the publishing date";
    errorMessage.style.display = "block"
  }else {
    errorMessage.style.display = "none";
    bookManager.addBook(title, author, language, date);
    event.target.reset();
  }
  
  // Render the books
  bookManager.render();
});

function validFormFieldInput(data){
  return data !== null && data !== '';
};

/* Update status */
const bookCard = document.querySelector('#book-card');

// Add an 'onclick' event listener to the Tasks List
bookCard.addEventListener('click', (event) => {
    // Check if a "Mark As Read" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Book
        const parentBook = event.target.parentElement.parentElement;

        // Get the bookId of the parent Book.
        const bookId = Number(parentBook.id);

        // Get the book from the BookManager using the bookId
        const book = bookManager.getBookById(bookId);

        // Update the book status to 'READ'
        // book.status = 'READ';
        console.log(book.status);

        // Render the books
        bookManager.render();
    }

  });