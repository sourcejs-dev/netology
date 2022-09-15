const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const session = require('express-session');
require('express-async-errors');

const { UserService } = require('@modules/user/user.service');
const { errorHandler } = require('@middlewares/error.middleware');

module.exports = () => {
	passport.use(
		'local',
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password',
			},
			async (username, password, done) => {
				const user = await UserService.findByLogin(username).catch(() => false);

				if (!user)
					return done(null, false, {
						message: 'Неверный логин',
					});
				if (user.password !== password)
					return done(null, false, {
						message: 'Неверный пароль',
					});

				return done(null, user);
			}
		)
	);
	passport.serializeUser((user, cb) => cb(null, user._id));
	passport.deserializeUser(async (id, cb) => {
		try {
			const user = await UserService.findById(id);

			return cb(null, user);
		} catch (err) {
			return cb(err);
		}
	});

	const app = express();
	app
		.use(express.json())
		.use(express.urlencoded())
		.use(session({ secret: 'SECRET' }))
		.use(passport.initialize())
		.use(passport.session())
		.set('view engine', 'ejs')
		.set('views', path.join(pathRoot, 'views'))
		.use('/api', require('@routes'))
		.use(errorHandler)
		.listen(8080, () => console.log('Server started: http://localhost:8080'));
};
