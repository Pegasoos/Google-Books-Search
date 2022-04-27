const router = require('express').Router();
const Book = require('../models/Book');

router.get('/books', async (req, res) =>{
try {
    const books = await Book.find();
    
    res.status(200).json(books);
} catch (error) {
    res.status(500).json(error)
}
}); 
router.post('/books', async (req, res) =>{
    try {
       const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json(error);
    }
    }); 
router.delete('/books/:id', async (req, res) =>{
        try {
           const deletedBook = await Book.deleteOne({_id:req.body});
            res.status(201).json(deletedBook);
        } catch (error) {
            res.status(500).json(error);
        }
        }); 
module.exports = router;