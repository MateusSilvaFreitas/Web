const booksData = require("../data/booksData");
const redisClient = require("../database/redis/connection");
const { promisify } = require("util");

exports.getBooks = async function () {
  let livros = JSON.parse(
    await promisify(redisClient.get).bind(redisClient)("livros")
  );
  if (!livros) {
    livros = await booksData.getBooks();
    redisClient.set("livros", JSON.stringify(livros));
  }
  return livros;
};

exports.getBook = function (bookCod) {
  return booksData.getBook(bookCod);
};

exports.deleteBook = function (bookCod) {
  return booksData.deleteBook(bookCod);
};

exports.saveBook = function (book) {
  return booksData.saveBook(book);
};
