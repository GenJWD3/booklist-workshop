
class BookManager {
  // Create a constructor with a parameter currentid set to 0
  constructor(currentId = 0) {
    // Initialize an empty array to save the books added 
    this.books = []; 
    // Set the currentId value to currentId
    this.currentId = currentId;
  }

  /*Add new books */

  // Create a method with an object to add a book
  addBook(title, author, language, date) {
    const newBook = {
      id: this.currentId++,
      title: title,
      author: author,
      language: language,
      date: date,
      status: 'TO READ',
    };
    // push the new book into the array 
    this.books.push(newBook);
    
  };

  /* Update status*/ 
  // Method to get the book id to update status
  getBookById(bookId) {
    let foundBook;

    for (let i = 0; i < this.books.length; i++) {

      const book = this.books[i];

      if(book.id === bookId){
        foundBook = book;
      };
    };
    return foundBook;
  };

   /*Display list of books*/
  render() {
      const booksHtmlList = [];

      for(let i = 0; i < this.books.length; i++) {
        const book = this.books[i];
    /*Format date - dd/mm/yyyy */
      // Get the Javascript object new Date, give it the argument book.date, and assign it to a variable
        const publishedDate = new Date(book.date);
      // Save the formatted date in a variable
        const formattedDate = publishedDate.getDate() + '/' + (publishedDate.getMonth() + 1) + '/' + publishedDate.getFullYear();  
        
        const bookHtml = createBookHtml(book.title, book.author, book.language,formattedDate, book.status);

        booksHtmlList.push(bookHtml);
      };
        const booksHtml = booksHtmlList.join('\n');

        const booksList = document.querySelector('#book-card');
        booksList.innerHTML = booksHtml;

    };  
    
  }
  
  const createBookHtml = (title, author, language, date, status) => {

    return `
            <li class="list-group-item mt-2">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${title}</h5>
            <span class="badge ${status === 'TO READ' ? 'badge-danger' : 'badge-success'}">${status}</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Author: ${author}</small>
            <small>Language: ${language}</small>
            </div>
            <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
            <small>Published: ${date}</small>
            <button class="btn btn-outline-success done-button ${status === 'TO READ' ? 'visible' : 'invisible'}">Mark As Read</button>
            </div>
            </li>
          `;
  }