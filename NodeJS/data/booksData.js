const database = require('../database/database')

exports.getBooks = function(){
    return database.query('select * from livros');
}

exports.getBook = function(bookID){
    return database.query('select * from livros where id = $1', [bookID]);
}
exports.deleteBook = function(bookID){
    return database.query('delete from livros where id = $1', [bookID]);
}
exports.saveBook = function(book){
    return database.one('insert into livros (nomeautor, isbn, qntdlivrosestoque, ideditora, idassuntolivro) values ($1, $2, $3, $4, $5) returning * ',
    [book.])
}
    