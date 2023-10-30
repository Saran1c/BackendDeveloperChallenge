const books = require("../models/book-models");

const addBook = async (req, res) => {
  let title = req.body.title;
  let exsistingBook = await books.findOne({ title });
  if (exsistingBook)
    return res
      .status(400)
      .json({ status: false, data: "The same book already exsist" });

  const data = new books({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  });
  console.log(data);
  try {
    await data.save();
    return res
      .status(200)
      .json({ status: true, data: "book successfully added" });
  } catch (err) {
    return res.status(400).json({ status: false, data: "Error" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const documents = await books.find();
    return res.status(200).json({ status: true, data: documents });
  } catch (err) {
    return res.status(400).json({ status: false, data: "Error" });
  }
};

const getSingleBooks = async (req, res) => {
  const Id = req.params.id;
  try {
    const documents = await books.findOne({ _id: Id });
    if (!documents)
      return res.status(400).json({ status: false, data: "No book fount" });
    return res.status(200).json({ status: true, data: documents });
  } catch (err) {
    return res.status(400).json({ status: false, data: "Error" });
  }
};

const updateSingleBooks = async (req, res) => {
  const Id = req.params.id;
  const documents = await books.findOne({ _id: Id });
  if (!documents)
    return res.status(400).json({ status: false, data: "No book fount" });
  let data = req.body;
  const result = await books.updateOne(
    { _id: documents._id },
    {
      $set: {
        title: data.title,
      },
    }
  );
  if (result.modifiedCount === 1) {
    return res
      .status(200)
      .json({ status: true, message: "successfully updated" });
  } else {
    return res.status(400).json({ status: false, data: "Error" });
  }
};

const deleteSingleBooks = async (req, res) => {
  const Id = req.params.id;
  const documents = await books.findOne({ _id: Id });
  if (!documents)
    return res.status(400).json({ status: false, data: "No book fount" });
  const result = await books.deleteOne({ _id: documents._id });
  console.log(result);
  if (result.deletedCount === 1) {
    return res.status(200).json({ status: true, data: "successfully deleted" });
  } else {
    return res.status(400).json({ status: false, data: "Error" });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getSingleBooks,
  updateSingleBooks,
  deleteSingleBooks,
};
