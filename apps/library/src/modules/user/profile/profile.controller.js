const getPageProfile = (req, res) =>
	res.render('user/profile', { title: 'Профиль', user: req.user });

module.exports.UserProfileController = { getPageProfile };
