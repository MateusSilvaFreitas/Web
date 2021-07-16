const booksData = require("../data/booksData");
const redisClient = require("../database/redis/connection");
const { promisify } = require("util");

exports.getBooks = async function () {
  let livros = JSON.parse(
    await promisify(redisClient.get).bind(redisClient)("livros")
  );
  if (!livros) {
    console.log("Nçao tem livro!")
    livros = await booksData.getBooks();
    redisClient.set("livros", JSON.stringify(livros));
  }else{
    console.log("Tem livro!")
  }
  return livros;
};

async function getKeyRedis(key) {
  return (retorno = redisClient.get(key, (err, reply) => {
    retorno = reply;
  }));
}

exports.getBook = function (bookCod) {
  return booksData.getBook(bookCod);
};

exports.deleteBook = function (bookCod) {
  return booksData.deleteBook(bookCod);
};

exports.saveBook = function (book) {
  return booksData.saveBook(book);
};
