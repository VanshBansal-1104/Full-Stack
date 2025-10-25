const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

// simple in-memory list of connected users (not required but helpful)
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id)

  socket.on('join', (name) => {
    socket.data.name = name || 'Anonymous'
    socket.broadcast.emit('message', {
      system: true,
      text: `${socket.data.name} has joined the chat.`,
      time: new Date().toISOString()
    })
  })

  socket.on('message', (msg) => {
    // msg should be { name, text }
    const payload = {
      name: socket.data.name || msg.name || 'Anonymous',
      text: msg.text,
      time: new Date().toISOString()
    }
    // broadcast to all including sender
    io.emit('message', payload)
  })

  socket.on('disconnect', (reason) => {
    console.log('user disconnected:', socket.id, reason)
    if (socket.data.name) {
      socket.broadcast.emit('message', {
        system: true,
        text: `${socket.data.name} has left the chat.`,
        time: new Date().toISOString()
      })
    }
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Socket.io server listening on http://localhost:${PORT}`)
})
