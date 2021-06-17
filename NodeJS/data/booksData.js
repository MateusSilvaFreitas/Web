const database = require('../database/database')

exports.getBooks = function(){
    return database.query('select * FROM public."Livro"');
}

exports.getBook = function(bookID){
    return database.query('select * from public."Livro" where "Codigo" = $1', [bookID]);
}
exports.deleteBook = function(bookID){
    return database.query('delete from public."Livro" where "Codigo" = $1', [bookID]);
}
exports.saveBook = function(book){
    return database.one('insert into public."Livro"("NomeAutor", "CodigoEditora", "ISBN", "QuantidadeEstoque", "Assunto") values ($1, $2, $3, $4, $5) returning * ',
    [book.nomeAutor, book.isbn, book.qntdEstoque, book.codigoEditora, book.assunto])
}
    