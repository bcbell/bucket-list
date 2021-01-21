const io = require('socket.io')({
  cors:{
      origin:'*'
  }
})

const PORT = 3001;
const newMessageEvent = "newChatMessage";

io.on("connection", (socket) => {
  
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(newMessageEvent, (data) => {
    io.in(roomId).emit(newMessageEvent, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(room);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = io