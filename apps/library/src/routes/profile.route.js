const {
	UserProfileController,
} = require('@modules/user/profile/profile.controller');
const { Router } = require('express');
const { isAuth } = require('@middlewares/isAuth.middleware');

const router = Router();

router.get('/user/me', isAuth, UserProfileController.getPageProfile);

module.exports = router;
