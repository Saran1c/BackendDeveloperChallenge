const express = require('express');

const {addBook,getAllBooks,getSingleBooks,updateSingleBooks,deleteSingleBooks } = require( "../controllers/book-controllers");
const router = express.Router();

router.get("/view-all-books", getAllBooks);
router.get("/view-one-book/:id", getSingleBooks);
router.post("/add-book", addBook);
router.patch("/edit-book/:id", updateSingleBooks);
router.delete("/delete-book/:id", deleteSingleBooks);
  
module.exports = router;