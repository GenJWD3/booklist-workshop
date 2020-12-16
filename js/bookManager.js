class BookManager {
  // Create a constructor with a parameter currentId set to 0
    constructor(currentId = 0){
    // Initialize an empty array to save the books added 
    this.books = [];
    // Set the currentId value to currentId
    this.currentId = currentId
    }
   /*Add new books */
   
    // Create a method with an object to add a book
    addBook(title, author, language) {
      const newBook = {
        id: this.currentId++,
        title: title,
        author: author,
        language: language,
      }
    // push the new book into the array in the constructor
    this.books.push(newBook);
    
  /*Display list of books*/

    // Select the empty tbody from the HTML and assign it to a variable
    const list = document.querySelector('#book-list');
    // Create a new element <tr> in the html 
    const row = document.createElement('tr');
    // Create an HTML table row to display the new book added
    row.innerHTML = `<td>${newBook.title}</td>
                      <td>${newBook.author}</td>
                      <td>${newBook.language}</td>
                      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `; 
    // Append the new HTML table row to the empty table body
    list.appendChild(row);
  }
}

