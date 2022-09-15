const { Router } = require('express');
const fileMiddleware = require('@middlewares/file.middleware.js');
const { BookController } = require('@modules/book/book.controller');

const router = Router();

router.get('/books', BookController.findAll);
router.post('/books', fileMiddleware.single('image'), BookController.create);
router.get('/books/:id', BookController.findById);
router.put('/books/:id', BookController.updateById);
router.delete('/books/:id', BookController.destroyById);
router.get('/books/:id/download', BookController.downloadById);

module.exports = router;
