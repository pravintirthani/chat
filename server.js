const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', socket => {
  console.log('New client connected') 
  
  socket.on('change color', (color) => {   
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))