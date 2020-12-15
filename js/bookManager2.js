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
    }
    // push the new book into the array 
    this.books.push(newBook);
    
    /*Display list of books*/
    
    // Get the Javascript object new Date, give it the argument newBook.date, and assign it to a variable
    
    // Format date to be dd/mm/yyyy
    

    // Select the empty div from the HTML and assign it to a variable
    
    // Create a new element <ul> in the html file and give it a class
    
    // Create an HTML card to display the new book added
    
    // Append the new HTML card to the empty div
  }
      
    
  }
  
  