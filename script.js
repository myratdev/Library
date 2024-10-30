function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title}, ${this.author}`;
  };
}

const book = new Book("HP", "J.K. Rowling", 456, "not read yet");
console.log(book.info());

const ajjfjkd = 67;
