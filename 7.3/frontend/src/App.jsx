import React, { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

// configure backend URL (change if needed)
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000'

export default function App() {
  const [name, setName] = useState('')
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const socketRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    // create socket when user connects
    if (connected) {
      const socket = io(SOCKET_URL)
      socketRef.current = socket

      socket.on('connect', () => {
        console.log('connected', socket.id)
        socket.emit('join', name)
      })

      socket.on('message', (m) => {
        setMessages((prev) => [...prev, m])
      })

      socket.on('disconnect', () => {
        console.log('disconnected')
      })

      return () => {
        socket.disconnect()
        socketRef.current = null
      }
    }
  }, [connected, name])

  useEffect(() => {
    // scroll to bottom when messages change
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  function handleSend(e) {
    e.preventDefault()
    if (!text.trim()) return
    const payload = { text }
    // send to server
    socketRef.current?.emit('message', payload)
    setText('')
  }

  return (
    <div className="chat-container">
      <h1>Real-time Chat (7.3)</h1>

      {!connected ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (!name.trim()) return
            setConnected(true)
          }}
        >
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Join Chat</button>
        </form>
      ) : (
        <div className="chat">
          <div className="messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.system ? 'system' : ''}`}>
                <div className="meta">
                  <span className="who">{m.system ? 'System' : m.name}</span>
                  <span className="time">{new Date(m.time).toLocaleTimeString()}</span>
                </div>
                <div className="text">{m.text}</div>
              </div>
            ))}
          </div>

          <form className="composer" onSubmit={handleSend}>
            <input
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}
