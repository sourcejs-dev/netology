const {
	UserProfileController,
} = require('@modules/user/profile/profile.controller');
const { Router } = require('express');
const { isAuth } = require('@middlewares/isAuth.middleware');

const router = Router();

router.get('/user/me', isAuth, UserProfileController.getPageProfile);
router.get('/user/books', UserProfileController.getPageBooks);
router.get('/user/books/create', UserProfileController.getPageCreateBook);
router.get('/user/books/:id', UserProfileController.getPageBookById);
router.get(
	'/user/books/update/:id',
	UserProfileController.getPageUpdateBookById
);

module.exports = router;
