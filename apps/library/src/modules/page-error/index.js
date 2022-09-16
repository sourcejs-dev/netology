class PageError extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}

	static message(status, message) {
		return new PageError(status, message);
	}

	static badRequest(message) {
		return new PageError(400, message);
	}
}

module.exports = PageError;
