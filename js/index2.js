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
    errorMessage.innerHTML = "Please select the publishing date.";
    errorMessage.style.display = "block"
  }else {
    errorMessage.style.display = "none"
    // Add the new book to the book manager
    bookManager.addBook(title, author, language, date, status);
    // Clear the form after submiting it correctly
    event.target.reset();
  };

});

function validFormFieldInput(data){
  return data !== null && data !== '';
};

const bookCard = document.querySelector('#book-card');

bookCard.addEventListener('click', (event) => {

  if(event.target.classList.contains('done-button')){

    const button = event.target;
    const parentBook = button.parentElement.parentElement;

    // Garantee the return of the id as a number
    const parentBookId = Number(parentBook.id);
    
    // Find the book id that matches the parent id
    const book = bookManager.books.find(book => book.id === parentBookId);

    // Change the book status
    // book.status = 'READ';

    // If statement to garantee the changes on the UI matches the array of books
    if(book.status === 'READ') {
      const badge = parentBook.getElementsByClassName('badge');
        badge[0].classList.remove('badge-danger');
        badge[0].classList.add('badge-success');
        badge[0].innerHTML = `READ`;
        button.remove();
    };
  };
});

