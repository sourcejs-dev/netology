const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const session = require('express-session');
require('express-async-errors');

const { UserService } = require('@modules/user/user.service');
const { errorHandler } = require('@middlewares/error.middleware');
const chatLoader = require('./chat.loader');
const serverLoader = require('./server.loader');

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
		.use(express.urlencoded({ extended: true }))
		.use(session({ secret: 'SECRET', resave: true, saveUninitialized: true }))
		.use(passport.initialize())
		.use(passport.session())
		.use('/static', express.static(path.join(PATH_ROOT, 'public')))
		.set('view engine', 'ejs')
		.set('views', path.join(PATH_ROOT, 'views'))
		.use('/api', require('@routes'))
		.use(errorHandler);

	serverLoader(app);
	chatLoader();
};
