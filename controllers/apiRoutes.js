const router = require('express').Router();
const Book = require('../models/Book');

router.get('/books', async (req, res) =>{
try {
    const books = await Book.find();
    
    res.json(books);
} catch (error) {
    res.json(error)
}
}); 
router.post('/books', async (req, res) =>{
    try {
        await Book.save();
    } catch (error) {
        res.json(error)
    }
    }); 
router.delete('/books/:id', async (req, res) =>{
        try {
            await Book.findOneAndDelete();
        } catch (error) {
            res.json(error)
        }
        }); 
module.exports = router;