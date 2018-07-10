const express      = require('express');
const reviewRouter = express.Router();
const Book         = require('../models/book');


reviewRouter.get('/books/:id/reviews/new', (req, res, next)=>{
    Book.findById(req.params.id)
    .then((theBook)=>{
        res.render('addReview', {book: theBook})
    })
    .catch((daError)=>{
        next(daError)
     })
});


reviewRouter.post('/books/:id/reviews/create', (req, res, next)=>{
    // const theReview = {reviewer: req.body.reviewer, content: req.body.content};
    // const theReview = req.body;
                            //first argument is ID of thing you want to find
     //                        |           second argument is the update you want to run
     //                        |                            |
    Book.findByIdAndUpdate(req.params.id,       {$push: {reviews: req.body}})
    .then((response)=>{

        res.redirect(`/books/${req.params.id}`)
    })
    .catch((err)=>{
        next(err);
    })
});











module.exports = reviewRouter;