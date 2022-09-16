const ApiError = require('@modules/api-error');
const PageError = require('@modules/page-error');

exports.errorHandler = (err, req, res, next) => {
	console.log(err);

	if (err instanceof PageError) {
		return res.status(err.status).render('layout/error', {
			title: 'Ошибка',
			url: req.headers.referer || '/',
			message: err.message,
		});
	}

	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: 'Неизвестная ошибка сервера' });
};
