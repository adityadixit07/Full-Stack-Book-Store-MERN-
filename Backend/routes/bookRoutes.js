const expres = require("express");
const Book = require("../model/Book");
const router = expres.Router();
const Product = require("../model/Book");

const bookController = require("../controllers/book-controller");
router.get("/", bookController.getAllBooks);

router.post("/", bookController.addBook);

router.get("/:id", bookController.getById);

router.put("/:id", bookController.updateBook);

router.delete("/:id",bookController.deleteBook);

module.exports = router;
