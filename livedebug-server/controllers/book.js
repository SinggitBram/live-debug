const { Book } = require('../models');

class BookController {
  static create(req, res, next) {
    const { isbn, title, author, category, stock } = req.body;
    Book.create({ isbn, title, author, category, stock })
      .then(function(newBook) {
        if(!newBook){
          res.status(400).json({message:`Empty Body`})
        }else if(newBook.isbn.length < 13){
          res.status(400).json({message:`Invalid ISBN length`})
        }else if(newBook.stock < 0){
          res.status(400).json({message:`Stock with negative number`})
        }else{
          res.status(201).json(newBook);
        }
      })
      .catch(next);
  }
}

module.exports = BookController;
