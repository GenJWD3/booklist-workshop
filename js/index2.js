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
    errorMessage.style.display = "none"
  }

  // Add the new book to the task manager
  bookManager.addBook(title, author, language, date);

  // Clear the form after submiting it
  newBookTitle.value = '';
  newBookAuthor.value = '';
  newBookLanguage.value = '';
  newBookDate.value = '';
});

function validFormFieldInput(data){
  return data !== null && data !== '';
};

