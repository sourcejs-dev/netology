const http = require('http');

module.exports = (app) => {
	const server = http.createServer(app);

	global.server = server;

	server.listen(PORT_SERVER, () =>
		console.log(`Server started http://localhost:${PORT_SERVER}`)
	);
};
