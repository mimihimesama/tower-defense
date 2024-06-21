import { addUser } from '../models/user.model.js';
import { handleConnection, handleDisconnect, handlerEvent } from './helper.js';
import { getGameAssets } from '../init/assets.js';

const registerHandler = (io) => {
  io.on('connection', (socket) => {
    const token = socket.handshake.query.token;

    const { init } = getGameAssets();

    addUser(token, init, socket.id);
    handleConnection(socket, token);
    socket.on('event', (data) => handlerEvent(socket, data, io));
    socket.on('disconnect', (socket) => handleDisconnect(socket, token));
  });
};

export default registerHandler;
