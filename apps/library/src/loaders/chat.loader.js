const socketio = require('socket.io');

module.exports = () => {
	const io = socketio(server);

	io.on('connection', (socket) => {
		const { id } = socket;

		console.log(`${id} подключился`);

		const { roomName } = socket.handshake.query;
		console.log(`Socket roomName: ${roomName}`);
		socket.join(roomName);
		socket.on('message-to-room', (msg) => {
			socket.to(roomName).emit('message-to-room', msg);
		});

		socket.on('disconnect', () => {
			console.log(`${id} Отключился`);
		});
	});
};
