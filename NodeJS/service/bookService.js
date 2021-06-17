const booksData = require('../data/booksData');

exports.getBooks = function() {
    return booksData.getBooks();
}

exports.getBook = function(bookCod) {
    return booksData.getBook(bookCod);
}

exports.deleteBook = function(bookCod) {
    return booksData.deleteBook(bookCod);
}

exports.saveBook = function(book) {
    return booksData.saveBook(book);
}