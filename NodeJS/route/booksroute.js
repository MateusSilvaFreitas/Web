const express = require('express');
const router = express.Router();
const bookService = require('../service/bookService')

//retorna todos os livros
router.get('/books', async function(req, res) {
    const books = await bookService.getBooks();
    res.json(books);
    
});

//retorna livro por codigo passado na URL
router.get('/book/:codigo', async function(req, res) {
   const book = await bookService.getBook(req.params.codigo);
   res.json(book);
});

router.delete('/book/:codigo', async function(req, res) {
    await bookService.deleteBook(req.params.codigo);
    return res.json([{message: 'registro excluido com sucesso'}])
});

router.post('/book', async function(req, res) {
    const book = req.body;
    const newBook = await bookService.saveBook(book);
    res.json(newBook)
});

module.exports = router;