const express = require('express');
const router  = express.Router();
const Book    = require('../models/book');

router.get('/books', (req, res, next) => {
    Book.find()
    .then((listOfBooks)=>{
        res.render('books', {listOfBooks});
    })
    .catch((err)=>{
        next(err); 
     })
});


router.get('/books/new', (req, res, next) =>{
    res.render('newBook');
});


router.post('/books/create', (req, res, next)=>{
   const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    rating: req.body.rating
   })

//    const newBook = new Book(req.body)
// ^ this is super fancy mode, use if you dare

   newBook.save()
   .then((response)=>{
       res.redirect('/books')
   })
   .catch((err)=>{
       next(err);
   }) 

})

router.get('/books/:id/edit', (req, res, next)=>{
   Book.findById(req.params.id)
   .then((theBook)=>{
       res.render('editBook', {theBook})
   })
   .catch((err)=>{
       next(err);
   })
})


router.post('/books/:id/update', (req, res, next)=>{
    Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        rating: req.body.rating
    })
    .then((theBook)=>{
        res.redirect('/books/'+theBook._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

router.post('/books/:id/delete', (req, res, next)=>{
    Book.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/books');
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/books/:id', (req, res, next) => {
    const id = req.params.id;
    Book.findById(id)
    .then((theBook)=>{    
        res.render('bookDetails',  theBook);
    })
    .catch((err)=>{
       next(err); 
    })
});






module.exports = router;
